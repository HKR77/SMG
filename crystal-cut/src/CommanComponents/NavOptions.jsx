import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


const NavOptions = React.memo(() => {
  const [currentPage, setCurrentPage] = useState('')  
  const {pathname} = useLocation();

  useEffect(() => {
      setCurrentPage(pathname)
  }, [pathname])
  
  
  return (
    <>
      <li className={`hover:text-sky-400 transition-all duration-300 flex gap-2 ${currentPage === '/' && 'text-sky-400'}`}><Link  to={"/"}>
        Home
      </Link></li>
      <li className={`hover:text-sky-400 transition-all duration-300 flex gap-2 ${currentPage === '/about' && 'text-sky-400'}`}><Link to={"/about"}>
        About
      </Link></li>
      <li className={`hover:text-sky-400 transition-all duration-300 flex gap-2 ${currentPage === '/products' && 'text-sky-400'}`}><Link  to={"/products"}>
        Services
      </Link></li>
      <li className={`hover:text-sky-400 transition-all duration-300 flex gap-2 ${currentPage === '/contact' && 'text-sky-400'}`}><Link to={"/contact"}>
        Contact
      </Link></li>
    </>
  );
});

export default NavOptions;
