import React from "react";
import Dark from "./Dark";

const Navabar = () => {
  return (
    <div>
      <div className=" bg-slate-300 p-3 w-full flex justify-between ">
        <h2 className=" text-black">Logo</h2>
        <Dark />
      </div>
    </div>
  );
};

export default Navabar;
