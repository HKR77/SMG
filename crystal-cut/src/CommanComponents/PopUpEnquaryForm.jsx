import React, { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

const PopUpEnquaryForm = () => {
  const { setIsPopUpFormOpen } = useContext(AppContext);
  const [enquiryFormData, setEnquiryFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    premises: "Apartment", // Default value
    location: "", // Corrected typo: Location -> location
    message: "",
  });

  const handleChange = (e) => {
    setEnquiryFormData({
      ...enquiryFormData,
      [e.target.id]: e.target.value,
    });
  };

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      setIsPopUpFormOpen(false);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/submit-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(enquiryFormData),
      });

      if (response.ok) {
        alert('Enquiry submitted successfully!');
        setEnquiryFormData({
          name: '',
          mobile: '',
          email: '',
          premises: 'Apartment',
          location: '',
          message: '',
        });
        setIsPopUpFormOpen(false);
      } else {
        alert('Failed to submit enquiry.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };
  
  return (
    <section
      className=" fixed h-screen w-screen inset-0 bg-black/60 z-50 flex items-center justify-center"
      onClick={handleClose}
    >
      <form className="bg-white rounded-lg px-4 py-6 relative" onSubmit={handleSubmit}>
        <FaTimes
          className=" absolute top-2 right-2 text-xl text-red-500"
          onClick={() => setIsPopUpFormOpen(false)}
        />

        <h1 className=" font-semibold text-lg text-center text-sky-400">
          Request for Quote
        </h1>

        <ul className=" text-sm space-y-2 sm:space-y-3 mt-2">
          <li className="flex flex-col min-w-[250px] sm:min-w-[350px]">
            <label htmlFor="name" className=" uppercase tracking-wider text-xs">
              Name
            </label>
            <input
              type="text"
              id="name"
              className=" border border-gray-300 rounded py-2 px-2"
              placeholder="Name"
              value={enquiryFormData.name}
              onChange={handleChange}
            />
          </li>
          <li className="flex flex-col min-w-[250px] sm:min-w-[350px]">
            <label
              htmlFor="phone"
              className=" uppercase tracking-wider text-xs"
            >
              phone <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="tel"
              id="mobile"
              className=" border border-gray-300 rounded py-2 px-2"
              placeholder="Phone"
              required
              value={enquiryFormData.mobile}
              onChange={handleChange}
            />
          </li>
          <li className="flex flex-col min-w-[250px] sm:min-w-[350px]">
            <label
              htmlFor="email"
              className=" uppercase tracking-wider text-xs"
            >
              e-mail <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="email"
              id="email"
              className=" border border-gray-300 rounded py-2 px-2"
              placeholder="Email"
              required
              value={enquiryFormData.email}
              onChange={handleChange}
            />
          </li>
          <li className="flex flex-col min-w-[250px] sm:min-w-[350px]">
            <label
              htmlFor="location"
              className=" uppercase tracking-wider text-xs"
            >
              loaction
            </label>
            <input
              type="text"
              id="location"
              className=" border border-gray-300 rounded py-2 px-2"
              placeholder="City"
              value={enquiryFormData.location}
              onChange={handleChange}
            />
          </li>

          <li className="flex flex-col min-w-[250px] sm:min-w-[350px]">
            <label
              htmlFor="premises"
              className="uppercase tracking-wider text-xs"
            >
              Premises <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              id="premises"
              name="premises" // Add name attribute
              className="border border-gray-300 rounded py-2 px-2"
              value={enquiryFormData.premises}
              onChange={handleChange}
              required
            >
              <option value="Apartment">Apartment</option>
              <option value="Individual House">Individual House</option>
              <option value="Institution/Hospital">Institution/Hospital</option>
              <option value="Commercial Space">Commercial Space</option>
              <option value="Others">Others</option>
            </select>
          </li>
          <li className="flex flex-col min-w-[250px] sm:min-w-[350px]">
            <label
              htmlFor="message"
              className="uppercase tracking-wider text-xs"
            >
              Additional Details
            </label>
            <textarea
              id="message"
              name="message" // Add name attribute
              className="border border-gray-300 rounded py-2 px-2"
              placeholder="Additional Details - Type of work / product [Glass / ACP / Canopy / Glazing] requirements"
              value={enquiryFormData.message}
              onChange={handleChange}
            ></textarea>
          </li>
        </ul>
        <button
          type="submit"
          className="bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded mt-4 w-full"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default PopUpEnquaryForm;
