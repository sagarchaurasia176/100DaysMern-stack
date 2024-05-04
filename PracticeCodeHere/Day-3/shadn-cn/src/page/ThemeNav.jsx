import React from 'react'
import Login from "./Login";
import Theme from "./Theme";
const ThemeNav = () => {
  return (
    <div>
       <div className="  space-x-0 flex bg-slate-800 p-3  justify-evenly ">
        <div>
          <h1
            className="text-2xl  font-extrabold leading-none
             tracking-tight text-white  dark:text-white"
          >
            Random Blogs
          </h1>
        </div>

        <div className="flex space-x-4">
          <Login />
          <Theme />
        </div>
      </div>
    </div>
  )
}

export default ThemeNav