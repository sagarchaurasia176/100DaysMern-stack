import { AllstatesData } from "@/Context/AppContext";
import { useContext, useEffect } from "react";
import Spinner from "./Spinner";
import BootmSec from "./BootmSec";
import ThemeNav from "./ThemeNav";


// blog function here
function Blog() {

  const { Loading, posts, ApiCalling } = useContext(AllstatesData);
  useEffect(() => {
    ApiCalling();
    console.log(ApiCalling());
  }, []);

  return (
    <div className=" ">
        <ThemeNav/>
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
              className="  cursor-pointer items-center 
            justify-between transition duration-300 ease-in 
            gap-3 p-3 mt-2 ml-4 rounded-xl outline "
            >
              <div key={values.id} className=" ">
                <div>
                  {values.title}
                  <h4 className="mb-2  text-2xl font-bold tracking-tight">
                    {values.author}
                  </h4>
                  <p>{values.content}</p>
                  <p className="mb-3 font-normal">
                    <span>{values.category}</span>
                  </p>
                  <br></br>
                  {/* <p className="mb-3 font-normal"> */}
                  <span className=" text-blue-600 flex justify-evenly font-medium">
                   
                    {values.tags.map((hashtag, index) => {
                      return (
                        
                        <button key={index} className=" ">
                          #{hashtag}
                        </button>

                      );
                    })}
                  </span>
                  <p>{values.date}</p>
                </div>
              </div>
            </div>
          ))
        )}
        <BootmSec/>
      </>
    </div>
  );
}

export default Blog;
