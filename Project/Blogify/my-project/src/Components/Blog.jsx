import React from "react";

const Blog = () => {
  return (
    <div className=" ">
      {/* card */}
      <div className=" grid sm:grid-cols-3 gap-3 border border-spacing-1 sm:w-[80%] p-2  bg-slate-800 m-auto ">
        <a
          href="#"
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
      </div>
    </div>
  );
};

export default Blog;
