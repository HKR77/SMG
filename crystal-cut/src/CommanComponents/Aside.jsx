import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import NavOptions from './NavOptions'

const Aside = React.memo(() => {
    const {isSidebarOpen} = useContext(AppContext)
    useEffect(() => {
      if (isSidebarOpen) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
  
      return () => {
        document.body.classList.remove("overflow-hidden");
      };
    }, [isSidebarOpen])
    
  return (
    <aside className={`bg-white h-full ${isSidebarOpen?'w-[150px]':'w-0'} transition-all duration-300 fixed top-0 left-0 z-10 pt-10`}>
        {
            isSidebarOpen && (<ul className=' flex flex-col items-start pl-4 gap-4 font-bold pt-4'>
                <NavOptions/>
            </ul>)
        }
    </aside>
  )
})

export default Aside