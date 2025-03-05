import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Footer from "../CommanComponents/Footer";
import ServiceCategoriesHeader from "../components/Services/ServiceCategoriesHeader";
import WorkCollage from "../components/Services/WorkCollage";

const Services = React.memo(() => {
    const {isSidebarOpen, setIsSidebarOpen} = useContext(AppContext)
    useEffect(() => {
      window.scrollTo(0, 0);
      if (isSidebarOpen) {
        setIsSidebarOpen(!isSidebarOpen)
      }
    }, [])
  return (
    <div>
      <ServiceCategoriesHeader />
      <WorkCollage />
      <Footer />
    </div>
  )
})

export default Services