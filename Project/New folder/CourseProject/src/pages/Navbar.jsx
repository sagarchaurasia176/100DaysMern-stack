import React from "react";
import { FilterData } from "../data";
import { Button } from "@/components/ui/button";


function Navbar() {
  return (
    <>
      <div className="">
        <h3 className=" items-center text-center ">Top Courses</h3>
        <div className=" bg-slate-900 items-center">
        
        {FilterData.map((values) => {
          //when you used the currly bracket then you should need to written it
          return (
            <Button key={values.id}>{values.title}</Button>
          );
        })}

        </div>
      </div>
    </>
  );
}

export default Navbar;
