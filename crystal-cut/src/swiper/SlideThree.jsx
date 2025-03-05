import React from 'react'
import { assets } from "../assets/assets";
import { FaCrosshairs } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const SlideThree = React.memo(() => {
  return (
    <section className={`h-full w-full relative`}>
          <img
            src={assets.hero1}
            alt="Hero image"
            className="object-cover w-full h-full"
          />
    
          <div className=" absolute inset-0 flex items-center justify-center">
            <section className=" h-fit w-fit max-w-2/3 bg-black/70 rounded text-white px-4 py-4 md:px-16 md:py-10 flex flex-col items-center text-center gap-4  text-xs md:text-lg">
              <h1 className=" font-semibold">
              More Than Just Glass <br /> It’s a Legacy of Excellence
              </h1>
    
              <div className="flex flex-col gap-2 items-center">
                <div className="h-[2px] w-full bg-white" />
                <div className="flex items-center text-sky-400 gap-x-4 gap-y-2 md:gap-x-8 justify-center flex-wrap my-3">
                  <p className=' flex gap-2 items-center'><FaHandshake className=' rounded-full  outline-1 outline-offset-3' />  Reliabilit</p>              
                  <p className=' flex gap-2 items-center'><FaCrosshairs className=' rounded-full  outline-1 outline-offset-3' /> Precision</p>              
                  <p className=' flex gap-2 items-center'><FaLightbulb  className=' rounded-full  outline-1 outline-offset-3' /> Expertise</p>              
                </div>
                <div className="h-[2px] w-full bg-white" />
    
              </div>
              <a href='tel:+919944419993' className='px-4 py-2 rounded text-white shadow-white bg-sky-400 flex items-center gap-1 text-sm'>
              <MdOutlinePhoneInTalk className='text-xl font-semibold ' /> +91 99444 19993
              </a>
            </section>
          </div>
        </section>
  )
})

export default SlideThree