import '../App.css'

import { createContext, useEffect, useState } from "react";
export const AllstatesData = createContext();
export default function AllstatesProvider({ children }) {
  //providers
  const [Loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [posts, setPost] = useState([]);
  //for dark mode creations
  const [isDark ,setDark] = useState(true);
  
  const ThemeChanger = ()=>{
      //true or false  
      setDark(() => !isDark);
    }
// check the theme for light and the darks
  const ChangerMode = isDark ? "dark" : "light"

    // api key

  // 6987b744e8fd485d835b18083c3de2e4
  // this is basically the setAttribute which directly update to the html of your page

  useEffect(()=>{
      document.documentElement.setAttribute("data-theme" , ChangerMode);
    },[isDark])


  //for api calling here
  const ApiCalling = async () => {
    setLoading(true);
    try {
      const FetchData = await fetch("https://codehelp-apis.vercel.app/api/get-blogs");
      const convertJso = await FetchData.json();
      console.log(convertJso);
      setPage(convertJso.page);
      setTotal(convertJso.total);
      setPost(convertJso.posts);
    } 
    catch {
      console.log("error in the contextAPI");
      setPage(1);
      setPost([]);
      setTotal(null);
    }
    setLoading(false);
  };
  // VALUES OF THE DATA HERE
  const ValuesOFData = {
    ChangerMode,
    ThemeChanger,
    ApiCalling,
    Loading,
    setPost,
    page,
    setPage,
    setTotal,
    total,
    posts,
    setLoading,
  };
  return (
    <AllstatesData.Provider value={ValuesOFData}>
      {children}
    </AllstatesData.Provider>
  );
};