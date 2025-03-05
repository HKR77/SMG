import React from "react";
import { assets } from "../../assets/assets";
import QuoteButton from "../../AtomicComponents/QuoteButton";
import NoOfProjectCounter from "../Animation/NoOfProjectCounter";

const LandingAbout = React.memo(() => {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 py-4 md:py-16 px-4 md:px-16 lg:px-20 text-sm md:text-lg bg-slate-100">
        <div className="flex flex-col gap-4 items-center justify-center ">
          <h1 className="text-lg md:text-3xl font-bold text-center text-sky-400">
            Glass interior and exterior Works
          </h1>
          <p className=" tracking-wider leading-6 text-gray-500  md:leading-relaxed text-justify">
            Welcome to Sri Mayan Glass, one of the Tamil Nadu's leading provider of premium
            glass interior and exterior solutions. Serving{" "}
            <span className="text-sky-500">Coimbatore</span>,{" "}
            <span className="text-sky-500">Madurai</span>,{" "}
            <span className="text-sky-500">Chennai</span>,{" "}
            <span className="text-sky-500">Trichy</span>, and beyond, we
            transform your vision into reality with meticulous craftsmanship and
            unparalleled expertise. Let us help you achieve your design goals.
          </p>
          <QuoteButton TextValue = 'Request Quote!' />
          
        </div>
        <div className="flex items-center justify-center relative ">
            <img src={assets.Wall1} alt=""  className=" rounded-l-[40%] rounded-r-2xl aspect-square h-[300px]"/>
            <NoOfProjectCounter />
        </div>
      </div>
    </>
  );
});

export default LandingAbout;
