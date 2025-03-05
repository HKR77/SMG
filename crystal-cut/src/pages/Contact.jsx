import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import ContactLanding from "../components/Contact/ContactLanding";
import Footer from "../CommanComponents/Footer";
import EmbedMap from "../components/Contact/EmbedMap";

const Contact = React.memo(() => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(AppContext);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (isSidebarOpen) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  }, []);

  return (
    <div className="">
      <ContactLanding />

      <EmbedMap/>

      <Footer />
    </div>
  );
});

export default Contact;
