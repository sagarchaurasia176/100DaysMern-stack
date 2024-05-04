import { AllstatesData } from "@/Context/AppContext";
import { useContext, useEffect } from "react";
import Spinner from "./Spinner";

// blog function here
function Blog() {
  const { Loading, posts, ApiCalling } = useContext(AllstatesData);
  useEffect(() => {
    ApiCalling();
  }, []);

  return (
    <div>
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
            <div key={values.id} className="p-2  rounded-lg shadow">
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
