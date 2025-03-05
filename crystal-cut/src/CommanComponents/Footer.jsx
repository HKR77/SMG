import React from "react";
import SocialNetworks from "../AtomicComponents/SocialNetworks";
import NavOptions from "./NavOptions";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";
import NavProduct from "./NavProduct";



const Footer = React.memo(() => {
  return (
    <footer className="bg-sky-950 px-4 md:px-16 lg:px-20 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <section className=" space-y-2">
          <h1 className="text-white font-bold text-lg">Sri Mayan Glass</h1>
          <p className=" tracking-wider text-sm leading-6 text-gray-50">
            Since 2002, Sri Mayan Glass Interiors & Exteriors has been a trusted
            name in the glass industry, serving Coimbatore and extending our
            reach across Tamil Nadu and its neighboring states.
          </p>
          <SocialNetworks />
        </section>

        {/* Menu links */}
        <section className="text-white flex flex-col items-center">
          <h1 className="font-semibold text-sm">Menu Links</h1>
          <ul className="text-sm *:pl-3 space-y-1.5 mt-2">
            <NavOptions />
          </ul>
        </section>

        <section className="text-white flex flex-col">
          <h1>Products Link</h1>
          <ul className="text-sm *:pl-3 space-y-1.5 mt-2">
            <NavProduct />
          </ul>
        </section>

        {/* Address */}
        <address className="text-white flex flex-col space-y-3">
          <h1 className="font-semibold text-sm">Contact</h1>
          <div className="flex gap-2 text-sm">
          <IoMdCall className=" size-5"  />
          <a href="tel:919944419993">+91 99444 19993</a>
          </div>
          <div className="flex gap-2 text-sm">
          <MdMarkEmailRead className=" size-5"  />
            <a href="emailto:srimayanglass@gmail.com">srimayanglass@gmail.com</a>
          </div>
          <div className="flex gap-2 text-sm">
          <FaLocationDot className=" size-7" />
          <div className=" flex flex-wrap">
            <p>27/1073, </p>
            <p>Near Alagu Pharmacy,</p>
            <p>MTP Road, </p>
            <p>Vadakovai,</p>
            <p>Coimbatore - 641 109</p>
          </div>
          </div>
        </address>
      </div>
    </footer>
  );
});

export default Footer;
