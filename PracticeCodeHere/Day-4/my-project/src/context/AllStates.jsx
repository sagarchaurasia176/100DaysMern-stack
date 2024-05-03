import React, { createContext , useEffect , useState } from "react";
//create your context
export const ContextCreate = createContext();
//provider
export function AllStates({ children }) {

  const [loading, setLoading] = useState(false);
  const [random, setRandom] = useState([]);
  //api calling
  const GetApi = async () => {
    try {
      setLoading(true);
      const url = "https://randomuser.me/api/";
      const ApiLink = await fetch(url);
      const resp = await ApiLink.json();
      setRandom(resp.results);
      console.log(resp)
    } catch {
      console.log("error in the api which is context Page");
      setDtl([]);
    }
    setLoading(false);
  };  

  
  useEffect(()=>{
    GetApi();
  },[])


  const values = { loading, random };
  // context Providers
  return (
    <ContextCreate.Provider value={{ values }}>
      {children}
    </ContextCreate.Provider>
  );
}