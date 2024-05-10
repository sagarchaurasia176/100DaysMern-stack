import { useContext, useEffect } from "react";
import Spinner from "./Spinner";
import BootmSec from "./BootmSec";
import ThemeNav from "./ThemeNav";
import { AllstatesData } from "@/Context/AppContext";

// blog function here
function Blog() {
  const { Loading, posts, ApiCalling } = useContext(AllstatesData);
  
  
  useEffect(() => {
    ApiCalling();
    console.log(ApiCalling());
// tommorow pending works


  }, []);
  return (
    <div className=" ">
      <ThemeNav />
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
                  <h4 className="mb-2  text-2xl font-bold tracking-tight">
                    {values.author}
                  </h4>
                  <p>{values.content}</p>
                  <p className="mb-3 font-normal">
                    <span>{values.category}</span>
                  </p>
                  <br></br>
                   
                    <span className=" flex justify-between text-blue-500">
                      {values.tags.map((tag)=>(
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
