import { createContext, useState } from "react";
export const AllstatesData = createContext();
export default function AllstatesProvider({ children }) {
  //providers
  const [Loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [posts, setPost] = useState([]);
  //for dark mode creations
  const [theme ,setTheme] = useState(true);

  const ThemeChanger = ()=>{
      setTheme(!theme);
  }
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
    theme,
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