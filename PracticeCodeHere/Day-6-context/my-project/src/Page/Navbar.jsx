import React from 'react'
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function Navbar() {
  return (
    <div>
         <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">Logo</div>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Services</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
          </li>
          <button className=' bg-slate-50  p-1 rounded-md'>
          <CiDark />
          </button>

          {/* <MdDarkMode/> */}
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar