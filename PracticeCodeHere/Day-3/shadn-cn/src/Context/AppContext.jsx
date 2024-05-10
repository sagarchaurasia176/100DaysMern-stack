import "../App.css";
import { createContext, useEffect, useState } from "react";
export const AllstatesData = createContext();

// the main funcition here
export default function AllstatesProvider({ children }) {
  //providers
  const [Loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotal] = useState(null);
  const [posts, setPost] = useState([]);
  const [theme, setTheme] = useState(true);

  //onClick Functions
  const isLoggedIn = () => {
    setTheme(!theme);
  }; // theme Changer apply here
  const themeChanger = theme ? "dark" : "light";
  //the theme concepts we have to passed into the html header page
  useEffect(() => {
    document.documentElement.setAttribute("theme-changer", themeChanger);
  }, [themeChanger]);
  let urlOFApi = "https://codehelp-apis.vercel.app/api/get-blogs";

  // url of the api 
  const url = `${urlOFApi} ? page =${(page = 1)}`;
  // for tag page here
  if (tag) {
    urlOFApi += `&tag=${tag}`;
  }
  // for category page
  if (category) {
    urlOFApi += `&category=${category}`;
  }

  //API CALLING HERE
  const ApiCalling = async (page = 1) => {
    setLoading(true);

    try {
      const FetchData = await fetch(`${url}?page=${page}`);
      const convertJso = await FetchData.json();
      setPage(convertJso.page);
      setTotal(convertJso.totalPages);
      setPost(convertJso.posts);
    } catch {
      setPage(1);
      setPost([]);
      setTotal(null);
    }

    setLoading(false);
  };

  // page Handler function apply here
  const PageHandler = (page) => {
    setPage(page);
    ApiCalling(page);
  };

  //values of Data here
  const ValuesOFData = {
    PageHandler,
    isLoggedIn,
    themeChanger,
    ApiCalling,
    Loading,
    page,
    totalPages,
    posts,
  };

  // FINALLY returned it here
  return (
    <AllstatesData.Provider value={ValuesOFData}>
      {children}
    </AllstatesData.Provider>
  );
}
