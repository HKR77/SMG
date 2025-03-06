const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();
app.use(cors());

app.options('*', cors());

app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI);

const enquirySchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  premises: String,
  location: String,
  message: String,
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

enquirySchema.index({ createdAt: 1 }, { expireAfterSeconds: 30 * 24 * 60 * 60 });

const Enquiry = mongoose.model('Enquiry', enquirySchema);

// Nodemailer Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Enquiry Submission Route
app.post('/submit-enquiry', async (req, res) => {
  console.log("Submit enquiry route called");

  try {
    const { name, mobile, email, premises, location, message } = req.body;    

    // Save to MongoDB
    const newEnquiry = new Enquiry({ name, mobile, email, premises, location, message });
    await newEnquiry.save();

    // Send Email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.COMPANY_EMAIL,
      subject: 'New Enquiry Form Submission',
      text: `Name: ${name}\nMobile: ${mobile}\nEmail: ${email}\nPremises: ${premises}\nLocation: ${location}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Enquiry submitted successfully' });
  } catch (error) {
    console.error('Error submitting enquiry:', error);
    res.status(500).json({ error: 'Failed to submit enquiry' });
  }
});

// Login Route (Hardcoded Credentials)
app.post('/login', (req, res) => {
  console.log("Login route called");

  const { username, password } = req.body;

  if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ username: username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ success: true, message: 'Login successful', token });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Middleware for JWT Authentication
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Get All Enquiries Route (Protected)
app.get('/enquiries', authenticateToken, async (req, res) => {
  console.log("Enquiries route called");
  try {
    const enquiries = await Enquiry.find();
    res.status(200).json(enquiries);
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    res.status(500).json({ error: 'Failed to fetch enquiries' });
  }
});

// Admin Route to Update Enquiry Status (Protected)
app.put('/update-enquiry-status/:id', authenticateToken, async (req, res) => {
  console.log("update enquiry route called");

  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedEnquiry = await Enquiry.findByIdAndUpdate(id, { status }, { new: true });

    if (!updatedEnquiry) {
      return res.status(404).json({ error: 'Enquiry not found' });
    }

    res.status(200).json({ message: 'Enquiry status updated successfully', updatedEnquiry });
  } catch (error) {
    console.error('Error updating enquiry status:', error);
    res.status(500).json({ error: 'Failed to update enquiry status' });
  }
});

app.get('/anya', (req, res)=>res.send('backend & is up and running successfully.'))
app.get('/', (req, res)=>res.send('backend is up and running successfully.'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;