import React from "react";

const BlogDetails = ({ values }) => {
  return (
    <div>
      <div
        className=" 
                   items-center flex justify-between
                 transition duration-300 ease-in 
                 p-3 rounded-xl outline"
      >
        {" "}
        {/* getting the card btn here */}
        <div className=" ">
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
    </div>
  );
};

export default BlogDetails;
