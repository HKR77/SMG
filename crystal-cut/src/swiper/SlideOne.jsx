import React from "react";
import { assets } from "../assets/assets";
import { IoIosRibbon } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import QuoteButton from "../AtomicComponents/QuoteButton";

const SlideOne = React.memo(() => {
  return (
    <section className={`h-full w-full relative`}>
      <img
        src={assets.hero2}
        alt="Hero image"
        className="object-cover w-full h-full"
      />

      <div className=" absolute inset-0 flex items-center justify-center">
        <section className=" h-fit w-fit max-w-2/3 bg-black/70 rounded text-white px-4 py-4 md:px-16 md:py-10 flex flex-col items-center text-center gap-4  text-xs md:text-lg">
          <h1 className="font-semibold">
            Transforming Spaces with Clarity & Strength
          </h1>

          <div className="flex gap-2 items-center">
            <div className="h-1 w-16 bg-white"></div>
            <div className="flex items-center text-yellow-600">
              <FaStar />
              <IoIosRibbon className="text-xl md:text-4xl" />
              <FaStar />
            </div>

            <div className="h-1 w-16 bg-white"></div>
          </div>

          <p className=" text-sky-300">
            Your Trusted Glass Experts for 20+ Years.
          </p>
          <QuoteButton TextValue = 'Get a Free Quote!' />
        </section>
      </div>
    </section>
  );
});

export default SlideOne;
