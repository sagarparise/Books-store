import React from 'react'
import NavImg from '../assets/Standard Collection 11.png'
import { BsSearch } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
function Navbar() {
  return (
    <>
    <nav className=' flex justify-between p-'>
      <div className="right">
      <img src={NavImg} alt="" />
      <h2>KeazoNBOOKS</h2>
      </div>
      <div className="mid">
      <BsSearch />
      <input type="text" placeholder='Search for the book ' />
      <button
    type="button"
    class="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Button text
  </button>
      </div>
      <div className="left">
      <IoMdNotifications />
      <FaUserCircle />
      </div>
    </nav>

    </>
  )
}

export default Navbar