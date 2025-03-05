import React from 'react'
import { assets } from '../../assets/assets'

const AboutAbout = React.memo(() => {
  return (
    <section className='py-4 sm:py-10 px-4 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-2'>
        <section className=" ">
        <h1 className=" text-lg sm:text-2xl font-bold tracking-wider ">About <span className="text-red-600">MAYAN GLASS</span></h1>
        <p className=" tracking-wider leading-7 text-gray-500 mt-2 text-xs md:text-sm ">Since <span className="text-red-600">2002</span>, Sri Mayan Glass Interiors & Exteriors has been a trusted
        name in the glass industry, serving Coimbatore and extending our reach
        across <span className="text-red-600">Tamil Nadu and its neighboring states</span>. We pride ourselves on
        providing high-quality glass products and expert installation services.
        </p>
        <p className=" tracking-wider leading-7 text-gray-500 mt-2  text-xs md:text-sm">Our extensive product range includes toughened glass, stylish shower
        enclosures, space-saving sliding doors, convenient automated sensor
        doors, modern spider glazing, elegant glass hand railings, unique bend
        glass, decorative painted and etched glass, and stunning crystal work.
        Beyond glass, we also offer comprehensive aluminum works, durable ACP
        cladding, and innovative structural glazing solutions, along with a
        variety of window and partition options. <span className=" italic text-gray-600">Choose Sri Mayan Glass for all
        your interior and exterior glass and related needs.</span></p>

      </section>
      <section className='flex items-center justify-center mt-6'>
        <img src={assets.RailGuard1} alt="Railguard image" className=' rounded-l-full rounded-b-full h-full max-h-[350px] ' />
      </section>
    </section>
  )
})

export default AboutAbout