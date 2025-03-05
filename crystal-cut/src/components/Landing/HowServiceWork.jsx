import React from 'react'
import {
    IoCalendarNumberOutline,
    IoLocationOutline,
    IoHammerOutline,
  } from 'react-icons/io5';
  import { MdOutlineDesignServices } from 'react-icons/md';
//   import { RiInstallationLine } from 'react-icons/ri';
  import { TfiTruck } from "react-icons/tfi";

  
const HowServiceWork = React.memo(() => {
  return (
    <div className="container mx-auto py-12 px-4">
    <h2 className="text-3xl font-semibold text-center mb-8">How Our Services Work</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Step 1: Book Your Appointment */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-blue-100 p-4 rounded-full mb-4">
          <IoCalendarNumberOutline className="text-4xl text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Book Your Appointment</h3>
        <p className="text-gray-600">
          Schedule easily via Email, Phone, or our Website enquiry form.
        </p>
      </div>

      {/* Step 2: Consultation and Measurement */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-green-100 p-4 rounded-full mb-4">
          <IoLocationOutline className="text-4xl text-green-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Consultation & Measurement</h3>
        <p className="text-gray-600">
          Our team visits your location, discusses needs, and takes accurate measurements.
        </p>
      </div>

      {/* Step 3: Personalized Design */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-yellow-100 p-4 rounded-full mb-4">
          <MdOutlineDesignServices className="text-4xl text-yellow-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Personalized Design</h3>
        <p className="text-gray-600">
          We collaborate to create bespoke interior and exterior glass designs.
        </p>
      </div>

      {/* Step 4: Quality Fabrication */}
      <div className="flex flex-col items-center text-center md:col-start-1">
        <div className="bg-red-100 p-4 rounded-full mb-4">
          <IoHammerOutline className="text-4xl text-red-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Quality Fabrication</h3>
        <p className="text-gray-600">
          We use premium materials and expert craftsmanship for durable products.
        </p>
      </div>

      {/* Step 5: Rapid Installation */}
      <div className="flex flex-col items-center text-center md:col-start-2">
        <div className="bg-purple-100 p-4 rounded-full mb-4">
          <TfiTruck className="text-4xl text-purple-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Rapid Installation</h3>
        <p className="text-gray-600">
          Skilled technicians deliver and install services quickly.
        </p>
      </div>
    </div>
  </div>
  )
})

export default HowServiceWork