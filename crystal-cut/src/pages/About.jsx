import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import AboutHero from "../components/About/AboutHero";
import AboutAbout from "../components/About/AboutAbout";
import MissionVision from "../components/About/MissionVision";
import Footer from "../CommanComponents/Footer";
import WhyChoose from "../components/About/WhyChoose";

const About = React.memo(() => {
    const {isSidebarOpen, setIsSidebarOpen} = useContext(AppContext)
    useEffect(() => {
      window.scrollTo(0, 0);
      if (isSidebarOpen) {
        setIsSidebarOpen(!isSidebarOpen)
      }}, [])
  return (
    <div>
      <AboutHero />
      <AboutAbout />
      <MissionVision />
      <WhyChoose />
      <Footer />

    </div>
  );
});

export default About;
