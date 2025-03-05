import React from "react";
import SocialNetworks from "../AtomicComponents/SocialNetworks";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Ribben = React.memo(() => {
  return (
    <section className=" max-sm:hidden p-1 bg-sky-600 flex gap-5 items-center text-gray-100 justify-end">
      <FaPhoneAlt />
      <a href="tel:+919944419993" className=" border-r-2 pr-4 hover:text-white">
        +91 99444 19993
      </a>
      <IoIosMail />

      <a
        href="mailto:srimayanglass@gmail.com"
        className=" border-r-2 pr-4 hover:text-white"
      >
        srimayanglass@gmail.com
      </a>
      <SocialNetworks />
    </section>
  );
});

export default Ribben;
