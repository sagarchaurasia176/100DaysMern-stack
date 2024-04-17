import React from "react";
// import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
function Header() {
    return (
        <div>
            <h1 className=" text-2xl  font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-3xl dark:text-white">
                MERN WITH 👉 SAGAR
            </h1>
         
 
                <Link to='/Blog'>
                <Button>Read Docs</Button>

                </Link>

        </div >
    );
}

export default Header;
