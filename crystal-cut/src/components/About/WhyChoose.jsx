import React from "react";
import { LuFileBadge } from "react-icons/lu";
import { IoBagCheck } from "react-icons/io5";
import { FaBusinessTime } from "react-icons/fa6";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";

const WhyChoose = React.memo(() => {

  return (
    <div className=" px-4 md:px-16 lg:px-20 py-7 text-center flex flex-col gap-4">
      <h1 className="text-sm tracking-widest text-red-500">BENEFIT YOU GET</h1>
      <p className="text-3xl font-bold">Why choose Mayan Glass?</p>

      <section className="flex flex-wrap justify-center gap-6">
        <div className=" px-3 py-2 flex items-center gap-2 text-sm text-left border-2 rounded-lg max-w-[300px] text-sky-500 ">
          <IoBagCheck className=" size-16" />
          <div className=" space-y-2">
            <h1 className="font-semibold">Extensive Glass Selection</h1>
            <p className=" text-gray-500">
              Discover our range of Toughened glass & Designed glass products
              and services.
            </p>
          </div>
        </div>


        <div className=" px-3 py-2 flex items-center gap-2 text-sm text-left border-2 rounded-lg max-w-[300px] text-sky-500 ">
          <LuFileBadge className=" size-16" />
          <div className=" space-y-2">
            <h1 className="font-semibold">Quality Assured</h1>
            <p className=" text-gray-500">
              Every Mayan Glass product is rigorously inspected to meet the
              highest standards.
            </p>
          </div>
        </div>

        <div className=" px-3 py-2 flex items-center gap-2 text-sm text-left border-2 rounded-lg max-w-[300px] text-sky-500 ">
          <FaBusinessTime className=" size-16" />
          <div className=" space-y-2">
            <h1 className="font-semibold">On-Time, Hassle-Free</h1>
            <p className=" text-gray-500">
              We guarantee timely delivery and seamless installation services.
            </p>
          </div>
        </div>

        <div className=" px-3 py-2 flex items-center gap-2 text-sm text-left border-2 rounded-lg max-w-[300px] text-sky-500 ">
          <FaRupeeSign className=" size-10" />
          <div className=" space-y-2">
            <h1 className="font-semibold">Competitive Value</h1>
            <p className=" text-gray-500">
              High-quality glass products at prices that offer excellent value.
            </p>
          </div>
        </div>

        <div className=" px-3 py-2 flex items-center gap-2 text-sm text-left border-2 rounded-lg max-w-[300px] text-sky-500 ">
          <FaScrewdriverWrench className=" size-16" />
          <div className=" space-y-2">
            <h1 className="font-semibold">Dedicated Customer Support</h1>
            <p className=" text-gray-500">
              Our after-sales service ensures your continued satisfaction.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
});

export default WhyChoose;
