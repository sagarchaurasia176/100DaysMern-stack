import React from "react";
import Blog from "../Components/Blog";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div className=" w-full ">
        <Navbar/>
    <Blog/>
    </div>
  );
}

export default Home;
