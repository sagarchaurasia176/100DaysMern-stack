import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";



function Navbar() {
  const [txt, setTxt] = useState(true);
  const ChagneBtTxt = () => {
    setTxt(!txt);
  };
  return (
    <div>
      <nav className="border-gray-200 w-full bg-gray-50
       dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex 
        flex-wrap items-center justify-between mx-auto p-2 rounded-md">
          <NavLink to="/">
            <span className="self-center
             text-1xl font-semibold whitespace-nowrap dark:text-white">
              MERN Blog
            </span>
          </NavLink>
          <Button onClick={ChagneBtTxt}>
            {txt ? (
              <NavLink to="/">Home Page</NavLink>
            ) : (

                  <Link to='/Blog'>Blog Page</Link>
)}
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
