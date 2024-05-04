import { AllstatesData } from "@/Context/AppContext";
import React, { useContext } from "react";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const Theme = () => {
  //destructure the theme
  const { theme, ThemeChanger } = useContext(AllstatesData);

  return (
    <div>
      {theme ? (
        //this is the dark
        <CiDark
          className=" bg-slate-100 
                 text-black size-8
                rounded-md cursor-pointer "
        />
      ) : (
        //this is the white
        <MdDarkMode
          className="bg-slate-800 text-white size-8  
                rounded-md cursor-pointer"
        />
      )}
      {/* light mode apply here */}
    </div>
  );
};

export default Theme;
