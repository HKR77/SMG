import React, { useState } from "react";

const HOCWithFormLogic = ({ WrappedComponent }) => {
  return function WithFormLogic(props) {
    const [enquiryFormData, setEnquiryFormData] = useState({
      name: "",
      mobile: "",
      email: "",
      premises: "Apartment", // Default value
      location: "", 
      message: "",
    });

    const handleChange = (e) => {
      setEnquiryFormData({
        ...enquiryFormData,
        [e.target.id]: e.target.value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('https://smg-livid.vercel.app/submit-enquiry', {
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
        } else {
          alert('Failed to submit enquiry.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred.');
      }
    };

    return (
      <WrappedComponent
        enquiryFormData={enquiryFormData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        {...props}
      />
    );
  };
};

export default HOCWithFormLogic;
