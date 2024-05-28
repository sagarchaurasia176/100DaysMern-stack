// import Blog from "@/page/Blog";
// import ThemeNav from "@/page/ThemeNav";
import { AllstatesData } from "@/Context/AppContext";
import Spinner from "@/page/Spinner";
import ThemeNav from "@/page/ThemeNav";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import BlogDetails from "@/page/BlogDetails";

const BlogContex = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlog, setRelatedBlgo] = useState([]);
  const location = useLocation();
  const Navigate = useNavigate()
  const { Loading, setLoading } = useContext(AllstatesData);
  const blogId = location.pathname.split("/").at(-1);

  const FetchRelatedBlogs = async () => {
    setLoading(true);
    let urlOFApi = "https://codehelp-apis.vercel.app/api/get-blogs";
    let apiConvert = `${urlOFApi}?blogID=${blogId}`;
    try {
      const res = await fetch(apiConvert);
      const data = await res.json();
      setRelatedBlgo(data.blog);
      setBlog(data.relatedBlog);
    }   
    catch {
      //catch components
      console.log("error in the blogContex page");
      setRelatedBlgo([]);
      setBlog(null);
    }
    setLoading(false);
  };

  //useEffect apply here
  useEffect(() => {
    if (blogId) {
      FetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <>
      <ThemeNav />
      <div>
        <button onClick={() => Navigate(-1)}>Back</button>
      </div>
      <div>
        {
          //LOADING PART HERE
          Loading ? (
            <Spinner />
          ) : blog ? (
            <>
              {/* show the card components here */}
              <BlogDetails post={blog} />
              <b className=" text-center font-bold">Related Blogs</b>
              {/* apply some cards componensts */}
              {relatedBlog.map((post, indx) => (
                <>
                  <div className="" key={indx}>
                    {/* apply the map part here */}
                    <BlogDetails post={post} />
                  </div>
                </>
              ))}
            </>
          ) : (
            <h2>Data not found here</h2>
          )
        }
      </div>
    </>
  );
};

export default BlogContex;
