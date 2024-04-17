import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Spinner from "./Spinner";
function Navbar() {
  const [txt, setTxt] = useState(false);
  const ChagneBtTxt = () => {
    setTxt(!txt);
  };
  return (
    <div>
      <nav className="border-gray-200 w-full bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
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
              <NavLink to="/">Blog Page</NavLink>
            ) : (
              <NavLink to="/Blog">Home Page</NavLink>
            )}
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
