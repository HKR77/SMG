import React,{ useContext} from 'react'
import { AppContext } from "../context/AppContext";

const QuoteButton = React.memo(({TextValue}) => {
    const { setIsPopUpFormOpen } = useContext(AppContext);
  
  return (
    <button className="px-4 py-2 rounded text-white shadow-white bg-sky-400 font-semibold"
    onClick={()=>setIsPopUpFormOpen(true)}>
    {TextValue}
  </button>
  )
})

export default QuoteButton