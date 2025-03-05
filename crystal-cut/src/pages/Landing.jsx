import React, { useContext, useEffect } from "react";
import SwiperSlider from "../swiper/SwiperSlider";
import LandingAbout from "../components/Landing/LandingAbout";
import Footer from "../CommanComponents/Footer";
import { AppContext } from "../context/AppContext";
import HighlightBar from "../components/Landing/HighlightBar";
import HowServiceWork from "../components/Landing/HowServiceWork";
import SatisfiedCustRibben from "../CommanComponents/SatisfiedCustRibben";

const Landing = React.memo(() => {
  const {isSidebarOpen, setIsSidebarOpen} = useContext(AppContext)
  useEffect(() => {
    window.scrollTo(0, 0);
    if (isSidebarOpen) {
      setIsSidebarOpen(!isSidebarOpen)
    }  }, [])
  
  return (
    <>
      <section>
        <SwiperSlider />
        <LandingAbout />
        <HowServiceWork />
        <HighlightBar/>
        <SatisfiedCustRibben />
        <Footer />
      </section>
    </>
  );
});

export default Landing;
