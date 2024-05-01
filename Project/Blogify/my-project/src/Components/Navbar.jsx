import React from "react";

const Navbar = () => {
  return (
    <nav class="border-gray-200  p-2 bg-slate-900 dark:bg-gray-800 dark:border-gray-700">
      <div class=" flex justify-around flex-wrap ">
        <span class="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">
        Sagar
        </span>

        <button className="s bg-slate-700 text-white p-1 rounded sm:w-[103px] sm:p-2">
          Login
        </button>
      </div>
      
    </nav>
  );
};

export default Navbar;
