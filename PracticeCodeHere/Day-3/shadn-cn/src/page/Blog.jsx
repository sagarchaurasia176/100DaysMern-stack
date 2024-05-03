import { AllstatesData } from "@/Context/AppContext";
import { useContext, useEffect } from "react";
import Spinner from "./Spinner";

function Blog() {
  const { Loading, posts, ApiCalling } = useContext(AllstatesData);
  useEffect(() => {
    ApiCalling();
  }, []);
  return (
    <div>
      <div className=" w-full flex justify-evenly sm:w-full bg-white ">
        <div>
          <h1
            className="mb-4 text-2xl  font-extrabold leading-none
       tracking-tight text-black  dark:text-white"
          >
            Random Blogs
          </h1>
        </div>
        <div className=" space-x-4">
          <button className=" p-1 bg-yellow-300 rounded-md w-[80px]">Login</button>
          <button className=" p-1 bg-slate-800 text-white rounded-md w-[80px]">
            Theme
          </button>
        </div>
      </div>

      <hr className=" bg-black" />
      <br></br>
      {/* this is basically the card components */}
      <>
        {Loading ? (
          <Spinner />
        ) : posts && posts.length === 0 ? (
          <b className=" text-center m-auto  text-black text-2xl">
            🤷‍♂️ Data Not Found Here{" "}
          </b>
        ) : (
          posts &&
          posts.map((values) => (
            <div
              key={values.id}
              className=" w-auto p-2  gap-3  border
             border-gray-200 rounded-lg shadow"
            >
              <div className=" flex ">{/* <h3 */}</div>
              <div>
                {values.title}
                <h4
                  className="mb-2 text-2xl font-bold tracking-tight
               text-black"
                >
                  {values.author}
                </h4>
                <p>{values.content}</p>
                <p className="mb-3 font-normal text-black">
                  <span>{values.category}</span>
                </p>
                <p>{values.date}</p>
              </div>
            </div>
          ))
        )}
      </>
    </div>
  );
}

export default Blog;
