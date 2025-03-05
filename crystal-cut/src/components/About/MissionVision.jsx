import React from "react";

const MissionVision = React.memo(() => {
  return (
    <div className="bg-black">
      <div className=" grid grid-cols-1 md:grid-cols-2 py-2 px-4 md:px-16 lg:px-20 text-sm md:text-lg">
        <section className=" tracking-wider flex flex-col items-center max-md:border-b-2 md:border-r-2 border-gray-50 text-white gap-4 py-8 px-8 text-center ">
          <h1 className=" text-2xl font-bold">Mission</h1>
          <div className="w-4/5 h-[1px] bg-gray-50"></div>
          <p className=" text-gray-100">
            To empower architects, designers, and homeowners by providing
            high-quality glass solutions that inspire creativity and elevate the
            aesthetics of any space.
          </p>
        </section>
        <section className=" tracking-wider flex flex-col items-center max-md:border-t-2 md:border-l-2 border-gray-50 text-white gap-4 py-8 px-8 text-center ">
          <h1 className=" text-2xl font-bold">Vision</h1>
          <div className="w-4/5 h-[1px] bg-gray-50"></div>
          <p className=" text-gray-100">
            To be the leading glass provider in the region, recognized for our
            innovative designs, exceptional craftsmanship, and commitment to
            transforming spaces with the beauty and versatility of glass.
          </p>
        </section>
      </div>
    </div>
  );
});

export default MissionVision;
