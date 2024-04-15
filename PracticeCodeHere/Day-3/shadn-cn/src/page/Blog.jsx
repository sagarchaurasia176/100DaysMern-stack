import { AppContext } from "@/Context/AppContex";
import React, { useContext } from "react";
import Spinner from "./Spinner";
function Blog() {
  const { Loading, post } = useContext(AppContext);

  return (
    <div>
      <h1 class="mb-4 text-4xl  font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
        MongoDB, ExpressJS , React Js , Node JS
      </h1>
      <hr />
      <p className=" text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius itaque
        voluptatibus pariatur!
      </p>
      <br></br>
      <hr></hr>
      {/* contents here */}
      {Loading ? (
        <Spinner />
      ) : post.length === 0 ? (
        <>
          <b>Blog Data Not Found</b>
        </>
      ) : (
        <>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Blog;
