import React, { useContext } from "react";
import NavOptions from "./NavOptions";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
import { FaWhatsapp } from "react-icons/fa";
import { handleWhatsAppClick } from "../utility/commonUtils";

const Header = React.memo(() => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(AppContext);

  return (
    <>
      <header className="shadow sticky top-0 bg-white z-20 ">
        <div className="flex lg:justify-between  py-2 px-4 md:px-16 lg:px-20  items-center justify-between w-full">
          <section className=" lg:hidden h-full flex items-center justify-center text-2xl font-bold text-emerald-500">
            {isSidebarOpen ? (
              <FaTimes onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
            ) : (
              <FaBarsStaggered
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              />
            )}
          </section>

          <h1 className=" tracking-wider text-lg md:text-2xl">
            <span className=" text-sky-500  ">Mayan</span>
            <span className="font-semibold">Glass</span>
          </h1>
          <ul className="flex gap-4 max-lg:hidden text-sm font-semibold tracking-wider">
            <NavOptions />
          </ul>
          <section
            className=" absolute top-0 right-0 sm:relative max-lg:hidden rounded-full bg-emerald-500 py-2 pl-4 pr-8 text-sm font-semibold text-white cursor-pointer"
            onClick={handleWhatsAppClick}
          >
            <span>Get a Free Quote!</span>
            <section className=" absolute right-0  top-0 bg-emerald-500 text-xl p-2 rounded-full outline-4 outline-white translate-x-1/2">
              <FaWhatsapp className="" />
            </section>
          </section>

          <section
            className=" bg-emerald-500 text-sm text-white p-2 rounded-full lg:hidden outline-2 outline-emerald-500 outline-offset-2 translate-x-1/2 mr-3"
            onClick={handleWhatsAppClick}
          >
            <FaWhatsapp className="" />
          </section>
        </div>
      </header>
    </>
  );
});

export default Header;
