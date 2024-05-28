import Blog from "@/page/Blog";
import ThemeNav from "@/page/ThemeNav";
import React from "react";
import { useLocation, useNavigation } from "react-router-dom";

const TagsCategory = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div className="  w-auto  ">
      <ThemeNav />
      <div>
        <button onClick={() => navigation(-1)}>Back Contents</button>
      </div>
      <h2>
        Blog tagged <span>#{tag}</span>
      </h2>
      <br></br>
      <div>
        <Blog />
      </div>
    </div>
  );
};

export default TagsCategory;
