import { AllstatesData } from "@/Context/AppContex";
import { useContext, useEffect } from "react";
import Spinner from "./Spinner";

function Blog() {
  //destructure the state which you needed here
  //this is basically the consumers
  const { Loading, post } = useContext(AllstatesData);
  //now destruct the api here
  return (
    <div>
      <h1
        className="mb-4 text-4xl  font-extrabold leading-none
       tracking-tight text-white md:text-5xl lg:text-2xl dark:text-white"
      >
        MongoDB, ExpressJS , React Js , Node JS
      </h1>
      <hr />

      <br></br>

      {/* this is basically the card components */}
      <>
        {Loading ? (
          <Spinner />
        ) : post && post.length > 0 ? (
          <b className=" text-center m-auto  text-white text-2xl">
            🤷‍♂️ Data Not Found Here{" "}
          </b>
        ) : (
          post &&
          post.map((values) => (
            <div
              key={values.id}
              className=" w-32 bg-white border
             border-gray-200 rounded-lg shadow"
            >
              <div className="p-5">
                <img className=" w-28 h-48" src={values.img} alt="" />
                <h3
                  className="mb-2 font-bold tracking-tight
                text-black"
                >
                  {values.title}
                </h3>
                <h4
                  className="mb-2 text-2xl font-bold tracking-tight
               text-black"
                >
                  {values.author}
                </h4>
                <p className="mb-3 font-normal text-black">
                  <span>{values.category}</span>
                </p>

                <p>{values.date}</p>

                <div className=" flex space-x-2">
                  {post.tags.map((tag, index) => {
                    return (
                      <span
                        key={index}
                        className=" text-blue-600"
                      >{`#${tag}`}</span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))
        )}
      </>
    </div>
  );
}

export default Blog;
