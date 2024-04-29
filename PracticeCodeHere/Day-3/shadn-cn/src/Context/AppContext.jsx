import { createContext, useState } from "react";
//context API HERE
// import { ApiUrl } from "@/Api/BaseUrl";
export const AllstatesData = createContext();
export default function AllstatesProvider({ children }) {
  //providers
  const [Loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [posts, setPost] = useState([]);
  //for api calling here
  const ApiCalling = async () => {
    setLoading(true);

    try {
      const FetchData = await fetch(
        "https://codehelp-apis.vercel.app/api/get-blogs"
      );
      const convertJso = await FetchData.json();
      console.log(convertJso);
      setPage(convertJso.page);
      setTotal(convertJso.total);
      setPost(convertJso.post);
    } catch {
      console.error("error in the contextAPI");
      setPage(1);
      setPost([]);
      setTotal(null);
    }

    setLoading(false);
  };

  const pageHandler = (page) => {
    setPage(page);
    ApiCalling();
  }; // convert into one objects

  const ValuesOFData = {
    ApiCalling,
    pageHandler,
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
}
