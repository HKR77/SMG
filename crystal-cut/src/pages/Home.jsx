import React, { useContext, useEffect } from "react";
import Header from "../CommanComponents/Header";
import Aside from "../CommanComponents/Aside";
import { Outlet } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import PopUpEnquaryForm from "../CommanComponents/PopUpEnquaryForm";
import Ribben from "../CommanComponents/Ribben";

const Home = React.memo(() => {
  const { isPopUpFormOpen } = useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);

  return (
    <section className="font-roboto h-screen">
      {/* NavBar */}
      <Ribben />
      <Header />
      {isPopUpFormOpen && (
        <>
          <PopUpEnquaryForm />
        </>
      )}
      <Aside />

      {/* Content section */}
        <main className=" overflow-y-scroll">
          <Outlet />
        </main>
    </section>
  );
});

export default Home;
