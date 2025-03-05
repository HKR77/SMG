import React from 'react'
import { assets } from '../../assets/assets'
import QuoteButton from '../../AtomicComponents/QuoteButton'
import { FaWhatsapp } from "react-icons/fa";
import { handleWhatsAppClick } from '../../utility/commonUtils';

const AboutHero = React.memo(() => {
  return (
    <div className='relative w-full h-[250px] sm:h-[350px] flex flex-col items-start justify-center'>
        <img src={assets.Wall2} alt="" className='w-full h-full absolute inset-0 -z-20' />
        <div className=' absolute inset-0 w-full h-full bg-gradient-to-r from-black/90 to-black/0 -z-10'></div>
        <section className='py-4 px-4 md:px-16 lg:px-20'>
        <h1 className="font-semibold text-sm md:text-xl text-sky-400 tracking-wider">
            Elevating Spaces, Illuminating Dreams
          </h1>  
          <div className=' p-[2px] bg-gradient-to-r from-sky-400 w-2/3' ></div>
          <p className="text-white text-xs md:text-sm text-wrap sm:w-2/3 mt-4 tracking-wider">
            Transform your vision into reality with stunning interiors and
            exteriors.
          </p>

          <div className=' mt-4 flex gap-3 text-xs sm:text-sm'>
          <QuoteButton TextValue="Send a Enquary!" />
          <button
                      className="flex items-center gap-2 px-4 py-2 rounded text-white shadow-white bg-emerald-500 font-semibold"
                      onClick={handleWhatsAppClick}
                    >
                      <FaWhatsapp className="text-2xl" /> Reach us on WhatsApp
                    </button>
          </div>
      

        </section>
   
    </div>
  )
})

export default AboutHero