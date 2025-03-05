import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import SocialNetworks from "../../AtomicComponents/SocialNetworks";
import PageEnquaryForm from "../../CommanComponents/PageEnquaryForm";
import { handleWhatsAppClick } from "../../utility/commonUtils";
import HOCWithFormLogic from "../../CommanComponents/HOCWithFormLogic";

const PageFromWithLogic = HOCWithFormLogic({ WrappedComponent: PageEnquaryForm })

const ContactLanding = React.memo(() => {
  return (
    <div className="flex flex-wrap py-12 px-4 md:px-16 lg:px-20 space-y-8">
      <section className=" flex flex-col justify-center w-full lg:w-1/2">
        <h2 className=" uppercase tracking-widest text-sm font-semibold text-orange-500">
          Contact us
        </h2>
        <h1 className=" text-2xl font-bold text-sky-500">
          Get in touch with us
        </h1>
        <p className=" text-gray-400 text-xs md:text-sm tracking-wider mt-3 ">
          Contact us to request a quote or to schedule a consultation with our
          team.
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-2 text-sm  text-white font-semibold gap-4 mt-6 ">
          <a
            href="tel:+919944419993"
            className="flex px-4 rounded-full bg-sky-400 items-center cursor-pointer "
          >
            <div className=" outline-4 outline-white rounded-full p-2 -translate-x-1/2">
              <CiMobile3 />
            </div>
            +91 99444 19993
          </a>
          <a
            href="tel:+919500619993"
            className="flex px-4 rounded-full bg-sky-400 items-center cursor-pointer "
          >
            <div className=" outline-4 outline-white rounded-full p-2 -translate-x-1/2">
              <IoCallSharp />
            </div>
            +91 95006 19993
          </a>
          <div
            className="flex px-4 rounded-full bg-sky-400 items-center cursor-pointer "
             onClick={handleWhatsAppClick}
          >
            <div className=" outline-4 outline-white rounded-full p-2 -translate-x-1/2">
              <FaWhatsapp />
            </div>
            +91 99444 19993
          </div>
          <a
            href="mailto:srimayanglass@gmail.com"
            className="flex px-4 rounded-full bg-sky-400 items-center cursor-pointer "
          >
            <div className=" outline-4 outline-white rounded-full p-2 -translate-x-1/2">
              <CiMail />
            </div>
            srimayanglass@gmail.com
          </a>
        </div>

        <div className=" mt-6 text-sm  tracking-wider space-y-3">
          <h3 className=" font-semibold">Our office location</h3>
          <p className=" text-gray-500">
            27/1073, Near Alagu Pharmacy, MTP Road, Vadakovai, Coimbatore - 641
            109
          </p>
        </div>
        <div className=" h-[1px] bg-sky-400 my-4"> </div>

        <div className=" text-sm font-semibold tracking-wider space-y-3">
          <h3>Our Social Media</h3>
          <SocialNetworks />
        </div>
      </section>
      <PageFromWithLogic />
      
    </div>
  );
});

export default ContactLanding;
