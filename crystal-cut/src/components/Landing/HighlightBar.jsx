import React, { useEffect, useState } from "react";
import { RiEmotionHappyLine } from "react-icons/ri";
import { MdAddHomeWork } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import AnimatedElement from "../Animation/AnimatedElement";

const HighlightBar = React.memo(() => {
  const [animationStarted, setAnimationStarted] = useState(false)
  const [noOfProjects, setNoOfProjects] = useState(0)
  const [noOfHappyCustomers, setNoOfHappyCustomers] = useState(0)
  const [noOfYears, setNoOfYears] = useState(0)

  useEffect(() => {

    let interval;
    if (animationStarted) {
      interval = setInterval(() => {
        if (noOfHappyCustomers === 100 && noOfProjects === 1000 && noOfYears === 20) {
          clearInterval(interval);
          return; // Important: Exit the interval callback
        }

        setNoOfProjects((prev) => (prev < 5000 ? prev + 125 : prev));
        setNoOfYears((prev) => (prev < 20 ? prev + 1 : prev));
        setNoOfHappyCustomers((prev) => (prev < 100 ? prev + 5 : prev));
      }, 70);
    }
    return () => {
      clearInterval(interval)
    }
  }, [animationStarted, noOfHappyCustomers, noOfProjects, noOfYears])
  
  return (
    <div className="px-4 md:px-16 lg:px-20 py-8">
      <section className=" border-2 border-sky-500 rounded-lg px-4 py-4 flex text-sky-500 items-center justify-evenly">
        <AnimatedElement  animationClass="animate-trigger" setAnimationStarted={setAnimationStarted}>
          <div className="flex flex-col gap-2 items-center text-xs sm:text-lg font-semibold">
            <MdAddHomeWork className=" size-8 md:size-16" />
            <h1>
              <span className=" text-red-600 text-sm sm:text-xl">{noOfProjects}+</span>{" "}
              Projects
            </h1>
          </div>
        </AnimatedElement>
        <AnimatedElement  animationClass="animate-trigger" setAnimationStarted={setAnimationStarted}>
          <div className="flex flex-col gap-2 items-center text-xs sm:text-lg font-semibold">
            <GrUserExpert className=" size-8 md:size-16" />{" "}
            <h1>
              <span className=" text-red-600 text-sm sm:text-xl">{noOfYears}+</span>{" "}
              Years
            </h1>
          </div>
        </AnimatedElement>
        <AnimatedElement  animationClass="animate-trigger" setAnimationStarted={setAnimationStarted}>
          <div className="flex flex-col gap-2 items-center text-xs sm:text-lg font-semibold">
            <RiEmotionHappyLine className=" size-8 md:size-16" />{" "}
            <h1>
              <span className=" text-red-600 text-sm sm:text-xl">{noOfHappyCustomers}%</span>{" "}
              Satisfied!
            </h1>
          </div>
        </AnimatedElement>
      </section>
    </div>
  );
});

export default HighlightBar;
