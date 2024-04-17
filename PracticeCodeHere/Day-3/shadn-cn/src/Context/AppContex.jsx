import { ApiUrl } from "@/Api/BaseUrl";
import { createContext, useState } from "react";
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
     // console.log(convertJso);
      //getting the data from the json
      setPage(convertJso.page);
      setTotal(convertJso.total);
      setPost(convertJso.post);
      setLoading(false);
    } catch {
      console.error("error in the contextAPI")
    }
    setLoading(false);
  };

  const pageHandler = (page) => {
    setPage(page);
    ApiCalling();
  };





  // convert into one objects
  const ValuesOFData = {
    ApiCalling,
    pageHandler,
    Loading,
    setPost,
    setLoading,
    page,
    setPage,
    setTotal,
    total,
    post,
    setLoading,
  };

  return (
    <AllstatesData.Provider value={ValuesOFData}>
      {children}
    </AllstatesData.Provider>
  );
}
