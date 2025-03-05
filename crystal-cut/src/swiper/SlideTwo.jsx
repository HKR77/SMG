import React from "react";
import { assets } from "../assets/assets";
import { IoShield } from "react-icons/io5";
import { GiRosaShield } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa";
import { handleWhatsAppClick } from "../utility/commonUtils";

const SlideTwo = React.memo(() => {
  return (
    <section className={`h-full w-full relative`}>
      <img
        src={assets.hero3}
        alt="Hero image"
        className="object-cover w-full h-full"
      />

      <div className=" absolute inset-0 flex items-center justify-center">
        <section className=" h-fit w-fit max-w-2/3 bg-black/70 rounded text-white px-4 py-4 md:px-16 md:py-10 flex flex-col items-center text-center gap-4  text-xs md:text-lg">
          <h1 className=" font-semibold text-sky-300">
            Crystal Clear Quality & Built to Last
          </h1>

          <div className="flex gap-2 items-center">
            <div className="h-1 w-16 bg-white"></div>
            <div className="flex items-center text-cyan-600">
              <IoShield />
              <GiRosaShield className="text-xl md:text-4xl" />
              <IoShield />
            </div>

            <div className="h-1 w-16 bg-white"></div>
          </div>

          <p className=" text-white">Glass That Stands the Test of Time</p>
          {/* <QuoteButton TextValue = 'Get a Free Quote!' /> */}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded text-white shadow-white bg-emerald-500 font-semibold"
            onClick={handleWhatsAppClick}
          >
            <FaWhatsapp className="text-2xl" /> Reach us on WhatsApp
          </button>
        </section>
      </div>
    </section>
  );
});

export default SlideTwo;
