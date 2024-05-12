import { useContext, useEffect } from "react";
import Spinner from "./Spinner";
import BootmSec from "./BootmSec";
import { AllstatesData } from "@/Context/AppContext";
import { useLocation, useSearchParams } from "react-router-dom";

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
    }
     else if (location.pathname.includes("category")) {
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
          posts.map((values) => (
            <div
              className=" 
                   items-center flex justify-between
                 transition duration-300 ease-in 
                 p-3 rounded-xl outline"
            >
              {" "}
              {/* getting the card btn here */}
              <div key={values.id} className=" ">
                <div>
                  {values.title}
                  <h4
                    className="mb-2  text-2xl 
                  font-bold tracking-tight"
                  >
                    {values.author}
                  </h4>
                  <p>{values.content}</p>
                  <p className="mb-3 font-normal">
                    <span>{values.category}</span>
                  </p>
                  <br></br>

                  <span
                    className=" flex justify-between
                   text-blue-500"
                  >
                    {values.tags.map((tag) => (
                      <p>#{tag}</p>
                    ))}
                  </span>
                  <p>{values.date}</p>
                </div>
              </div>
            </div>
          ))
        )}
        <br></br>
        <BootmSec />
      </>
    </div>
  );
}

export default Blog;
