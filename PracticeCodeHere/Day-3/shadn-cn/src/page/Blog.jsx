import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Content from "./Content";
function Blog() {
    return (
        <div>
            <Link to="/">
                <Button>👈Prev Docs</Button>
            </Link>

            <h1 class="mb-4 text-4xl  font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
                MongoDB, ExpressJS , React Js , Node JS
            </h1>
            <hr />
            <p className=" text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius itaque
                voluptatibus pariatur!
            </p>
            <br></br>
            {/* <Content/> */}
        </div>
    );
}

export default Blog;
