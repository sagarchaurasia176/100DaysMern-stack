import { createContext, useState } from "react";
import { ApiUrl } from "@/Api/BaseUrl";
//context api created here
export const AppContext = createContext();
//context Provider here
export const ContextProvider = ({ children }) => {
  // this all are basically th  e provider
  const [Loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);

  const blogData = async (page = 1) => {
    setLoading(true);
    const url = `${ApiUrl}?page=${page}`;
    console.log(url)
    try {
      const apiData = await fetch(url);
      const convert = await apiData.json();
      console.log(convert);
      // modified this
      setPage(convert.page);
      setPost(convert.posts);
      setTotal(convert.totalPages);
    } catch {
      console.log("errror in api response");
      setPage(1);
      setPost([]);
    }
    setLoading(false);
  };


  //page handling
  const pageHandling = (page) => {
    setPage(page);
    blogData(page);
  };

  // alll data
  const AllData = {
    Loading,
    setLoading,
    post,
    setPage,
    setPost,
    setTotal,
    page,
    total,
    blogData,
    pageHandling,
  };

  // syntax of the sending the provider

  return (<AppContext.Provider AllData={AllData}>{children}</AppContext.Provider>);
};
