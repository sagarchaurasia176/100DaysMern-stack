import React from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
// import { MdDarkMode } from "react-icons/md";

function Navbar() {
  return (
    <div>
        <div className=' p-2 bg-white w-full flex justify-between '>
            <h2 className=' items-center text-center'>TechCourse</h2>
            {/* <MdDarkMode /> */}
            <div className=' p-2 bg-slate-600 rounded-md cursor-pointer'>

            <MdOutlineDarkMode  className='  text-white '/>
            </div>

        </div>

    </div>
  )
}

export default Navbar