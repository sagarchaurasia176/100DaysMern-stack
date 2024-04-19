import { AllstatesData } from "@/Context/AppContext";
import { useContext } from "react";
import Spinner from "./Spinner";
function Blog() {
  const { Loading, posts } = useContext(AllstatesData);
  console.log("values is undefined in the blog - post");
  console.log(posts);
  //now destruct the api here
  return (
    <div>
      <h1
        className="mb-4 text-4xl  font-extrabold leading-none
       tracking-tight text-black md:text-5xl lg:text-2xl dark:text-white"
      >
        Blog-web
      </h1>
      <hr className=" bg-black" />
      <br></br>
      {/* this is basically the card components */}
      <>
        {Loading ? (
          <Spinner />
        ) : posts && posts.length >= 0 ? (
          <b className=" text-center m-auto  text-black text-2xl">
            🤷‍♂️ Data Not Found Here{" "}
          </b>
        ) : (
          posts &&
          posts.map((values) => (
            <div
              key={values.id}
              className=" w-32 bg-black border
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
              </div>
            </div>
          ))
        )}
      </>
    </div>
  );
}

export default Blog;
