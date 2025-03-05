import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // If you want pagination
import "swiper/css/autoplay"; // For autoplay
import { Autoplay, Pagination } from "swiper/modules";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";
import SlideThree from "./SlideThree";

const SwiperSlider = React.memo(() => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      // Access the Swiper instance
      const swiper = swiperRef.current.swiper;

      // Set autoplay (optional)
      swiper.autoplay.start();
    }
  }, []);

  return (
    <>
      <div className="relative w-full h-[250px] max-h-[500px] md:h-[calc(100vh-80px)] md:aspect-[4/3] overflow-hidden">
        {/* Maintain 4:3 aspect ratio */}
        <Swiper
          ref={swiperRef}
          spaceBetween={30} // Adjust spacing between slides
          centeredSlides={true} // Center the active slide
          autoplay={{
            delay: 5000, // Autoplay delay in milliseconds
            disableOnInteraction: false, // Continue autoplay on user interaction
          }}
          pagination={{
            clickable: true, // Enable clickable pagination bullets
          }}
          modules={[Autoplay, Pagination]} // Include the modules
          className="h-full" // Ensure Swiper takes full height of container
        >
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
          <SwiperSlide>
            <SlideTwo />
          </SwiperSlide>
          <SwiperSlide>
            <SlideThree />
          </SwiperSlide>
        </Swiper>
        {/* Optional: Navigation buttons (use Swiper API to control) */}
      </div>
    </>
  );
});

export default SwiperSlider;
