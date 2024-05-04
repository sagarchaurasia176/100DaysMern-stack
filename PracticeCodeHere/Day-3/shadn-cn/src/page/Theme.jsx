import { AllstatesData } from "@/Context/AppContext";
import React, { useContext } from "react";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const Theme = () => {
  //destructure the theme
  const { ChangerMode, ThemeChanger } = useContext(AllstatesData);
  console.log(ChangerMode);
  return (
    <div>
      <div onClick={() => ThemeChanger(!ChangerMode)}>
     {ChangerMode ? <CiDark className=" size-8 cursor-pointer bg-slate-600 rounded"/> : <MdDarkMode className=" size-8 cursor-pointer bg-slate-50 rounded-md"/>}
   </div>
      </div>
    // </div>
  );
};

export default Theme;
