import { AllstatesData } from "@/Context/AppContext";
import React, { useContext } from "react";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const Theme = () => {
  //destructure the theme
  const { isLoggedIn, themeChanger } = useContext(AllstatesData);
  return (
    <div>
      <div onClick={() => isLoggedIn(themeChanger)}>
        {themeChanger ? (
          <CiDark className=" size-8 cursor-pointer bg-slate-600 rounded" />
        ) : (
          <MdDarkMode className=" size-8 cursor-pointer bg-slate-50 rounded-md" />
        )}
      </div>
    </div>
    // </div>
  );
};

export default Theme;
