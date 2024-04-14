import React, { useEffect } from "react";
import axios from "axios";
function Content() {


  const blogData = async () => {
    const url = "https://codehelp-apis.vercel.app/api/get-blogs";
    const fetchData = await axios.get(url);
    console.log(fetchData);
  };

  // useEffect data
  useEffect(() => {
    blogData();
  }, []);

  return (
    <div>
      <div className=" container  h-auto p-1 bg-white">
        <div className=" w-96">
          {
          blogData.map((value) => {
            <>
              <div key={value} 
              className=" font-bold  text-black">
                {blogData.title}
              </div>
              <p className=" font-serif text-black">name</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                ipsum numquam praesentium sequi, voluptatem doloribus possimus
                voluptatibus excepturi doloremque nostrum nam quos
                reprehenderit.
              </span>
            </>;
          })}

          
        </div>

        <hr></hr>
      </div>
    </div>
  );
}

export default Content;
