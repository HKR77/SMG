import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import { AppContext } from '../context/AppContext';

const NavProduct = (() => {
    const {setSelectedCategory} = useContext(AppContext);


  return (
    <>
      <li className={`hover:text-sky-400 transition-all duration-300 flex gap-2 `} onClick={()=>setSelectedCategory('toughened')}><Link  to={"/products"}>
        Toughened Glass
      </Link></li>
      <li className={`hover:text-sky-400 transition-all duration-300 flex gap-2 `} onClick={()=>setSelectedCategory('aluminum')}><Link to={"/products"}>
        Aluminum Works
      </Link></li>
      <li className={`hover:text-sky-400 transition-all duration-300 flex gap-2`} onClick={()=>setSelectedCategory('designed')}><Link  to={"/products"}>
        Designed Glass
      </Link></li>

    </>
  )
})

export default NavProduct