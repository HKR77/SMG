import React, { useEffect, useRef, useState } from "react";

const NoOfProjectCounter = React.memo(() => {
  const [noOfProject, setNoOfProject] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(()=>{
    const handleScroll = () => {
        if (sectionRef.current) {
          // console.log('entered if');
          
          const sectionTop = sectionRef.current.getBoundingClientRect().top;
          const triggerPoint = window.innerHeight * 0.7;
          // console.log(sectionTop);
          // console.log(triggerPoint);

  
          if (sectionTop < triggerPoint && !hasAnimated) { // Check if already animated
            sectionRef.current.classList.add('animate-slideUp');
            setHasAnimated(true); // Prevent animation from triggering again
  
            const intervalId = setInterval(() => {  // Use setInterval for smoother count
              setNoOfProject((prevCount) => {
                const nextCount = Math.min(5000, prevCount + 125);
                
                if (nextCount === 5000) {
                  clearInterval(intervalId); // Stop when target reached
                }
                return nextCount;
              });
            }, 70); // Adjust interval for counting speed
          } 
          // else if (sectionTop > triggerPoint) {
          //   sectionRef.current.classList.remove('animate-slideUp');
          //   setHasAnimated(false); // Reset animation trigger
          //   setNoOfProject(0);
          // }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [hasAnimated]);


  return (
    <section
      ref={sectionRef}
      className=" absolute right-4 bg-white shadow-xl rounded-md py-3 px-4 border-2 border-sky-400 transition-transform duration-500 ease-in-out will-change-transform text-center"
    >
      <p className="text-xl md:text-2xl text-sky-400">{noOfProject}+</p>
      <p className="text-sm md:text-lg text-gray-500">Successful Projects</p>
    </section>
  );
});

export default NoOfProjectCounter;
