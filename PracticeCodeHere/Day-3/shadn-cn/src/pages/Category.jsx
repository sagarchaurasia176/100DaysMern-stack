import Blog from "@/page/Blog";
import ThemeNav from "@/page/ThemeNav";
import { useLocation, useNavigation } from "react-router-dom";

const Category = () => {
  const location = useLocation();
  const navigation = useNavigation();
  const category = location.pathname.split("/").at(-1);
  return (
    <div>
      <ThemeNav />
      <div>
        <button
          className=" bg-white  p-1 rounded-md w-28 text-black"
          onClick={() => navigation(-1)}
        >
          Back
        </button>
      </div>
      <span className=" text-2xl font-semibold ">Blog on - {category}</span>
      <Blog />
    </div>
  );
};

export default Category;
