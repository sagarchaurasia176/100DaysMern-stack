import React from "react";
// import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
function Header() {
    return (
        <div>
            <h1 class="mb-4 text-4xl  font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
                MERN WITH 👉 SAGAR
            </h1>
            <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt distinctio soluta eum.
            </p>
 
                <Link to='/Blog'>
                <Button>Read Docs</Button>

                </Link>

            <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
            >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                />
            </svg>
        </div >
    );
}

export default Header;
