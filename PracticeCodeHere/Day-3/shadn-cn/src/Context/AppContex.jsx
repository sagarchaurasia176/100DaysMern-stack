import { ApiUrl } from "@/Api/BaseUrl";
import { createContext, useEffect, useState } from "react";
//context API HERE
export const AllstatesData = createContext();

export default function AllstatesProvider({ children }) {
  //providers
  const [Loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [post, setPost] = useState([]);

  //for api calling here
  const ApiCalling = async () => {
    setLoading(true);
    let url = ApiUrl;
    try {
      const FetchData = await fetch(url);
      const convertJso = await FetchData.json();
      console.log(convertJso);
      // console.log(convertJso);
      //getting the data from the json
      setPage(convertJso.page);
      setTotal(convertJso.total);
      setPost(convertJso.post);
    } catch {
      console.error("error in the contextAPI");
    }
    setLoading(false);
  };

  useEffect(()=>{
    ApiCalling()
  },[])

  const pageHandler = (page) => {
    setPage(page);
    ApiCalling();
  };

  // convert into one objects
  const ValuesOFData = {
    pageHandler,
    Loading,
    setPost,
    page,
    setPage,
    setTotal,
    total,
    post,
    setLoading,
  };

  return <AllstatesData.Provider value={ValuesOFData}>
      {children}
    </AllstatesData.Provider>

}
