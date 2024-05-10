import React from 'react'
import Login from "./Login";
import Theme from "./Theme";
import { NavLink } from 'react-router-dom';
const ThemeNav = () => {
  return (
    <div>
       <div className="  space-x-0 mt-[-32px]   w-full  flex bg-slate-800 p-3  justify-evenly ">
        <NavLink to='/'>
        <div>
          <h1
            className="text-2xl  font-extrabold leading-none
             tracking-tight text-white  dark:text-white"
          >
            Random Blogs
          </h1>
        </div>


        </NavLink>
       
        <div className="flex space-x-4">
          <Login />
          <Theme />
        </div>
      </div>
    </div>
  )
}

export default ThemeNav