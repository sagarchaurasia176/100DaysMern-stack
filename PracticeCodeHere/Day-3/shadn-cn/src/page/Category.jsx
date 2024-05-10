import { AllstatesData } from "@/Context/AppContext";
import React, { useContext } from "react";

const Category = () => {
  const { posts } = useContext(AllstatesData);
  return (
    <div className=" text-black">
        <h2 className=" text-black p-4 bg-yellow-50 ">Category</h2>
   
      <div className="  w-[400px] bg-slate-900 text-white">
        {posts.map((val, indx) => {
          return (
            <>
              <button className=" hover:bg-slate-800 w-auto p-5 duration-100 " key={indx}>{val.tags}</button>
            </>
          );
        })}
      </div>
    </div>
  );
}; 

export default Category;
