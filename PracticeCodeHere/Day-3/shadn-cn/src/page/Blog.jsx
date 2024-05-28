import { useContext, useEffect } from "react";
import Spinner from "./Spinner";
import BootmSec from "./BootmSec";
import { AllstatesData } from "@/Context/AppContext";
import { useLocation, useSearchParams } from "react-router-dom";
import BlogDetails from "./BlogDetails";
// blog function here
function Blog() {
  const { Loading, posts, ApiCalling } = useContext(AllstatesData);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      ApiCalling(Number(page), tag);
    } else if (location.pathname.includes("category")) {
      const categories = location.pathname
        .split("/")
        .at(-1)
        .replaceAll("-", " ");
      ApiCalling(categories);
    } else {
      ApiCalling(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <div className=" ">
      <>
        {Loading ? (
          <Spinner />
        ) : posts && posts.length === 0 ? (
          <b className=" text-center m-auto  text-2xl">
            🤷‍♂️ Data Not Found Here{" "}
          </b>
        ) : (
          posts &&
          posts.map((values) => <BlogDetails key={values.id} values={values} />)
        )}
        <br></br>
        <BootmSec />
      </>
    </div>
  );
}

export default Blog;
