import React, { useRef } from 'react'
import NavImg from '../assets/Standard Collection 11.png'
import { BsSearch } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
function Navbar({handleSearch}) {

  const inputVal = useRef(null);

  const clickSearch = ()=>{
    const query = inputVal.current.value;
    handleSearch(query);
  }

  return (
    <>
    <nav className=' h-[70px] flex justify-between items-center py-3 px-7 bg-[#292828] sticky top-0'>
      <div className="right flex justify-between items-center gap-5">
      <img src={NavImg} alt="" className=' w-[60px] h-[40px]'/>
      <h2 className=' text-[20px] font-bold text-cyan-50'>KeazoNBOOKS</h2>
      </div>

        <div className="mid w-[400px] flex justify-between items-center gap-2">
        
      <div className="search-bar flex-1 px-5 py-2 text-gray-300 rounded-md flex justify-between items-center gap-2 bg-[#373737]">
      <BsSearch />
      <input type="text" ref={inputVal} className='flex-1 bg-transparent outline-none' placeholder='Search for the book ' />
      
      </div>
      <button
    type="button"
    class="rounded-md border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-300 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    onClick={()=>clickSearch()}
  >
   Search
  </button>
        </div>

      <div className="left flex justify-between gap-4 items-center p-3 text-gray-300 text-[20px]">
      <IoMdNotifications  />
      <FaUserCircle />
      </div>
    </nav>

    </>
  )
}

export default Navbar