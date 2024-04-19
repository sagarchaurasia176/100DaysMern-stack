import React, { createContext, useEffect, useState } from "react";
//create your context
export const ContextCreate = createContext();
//provider
export function AllStates({children}) {
  const [loading, setLoading] = useState(false);
  const [random, setRandom] = useState([]);
  // values
  const values = {
    loading,
    setLoading,
    random,
    setRandom,
  };

  //api calling
  useEffect(() => {
    const FetchDatas = async () => {
      setLoading(true)
      try {
      
        const fetchData = await fetch("https://randomuser.me/api/");
        const resp = fetchData.json();
        console.log(resp);
      } catch {
        console.log("error generate");
      }
    setLoading(false)
    };

    FetchDatas();
  }, []);


return(<ContextCreate.Provider value={values}>
  {children}
</ContextCreate.Provider>)
}


