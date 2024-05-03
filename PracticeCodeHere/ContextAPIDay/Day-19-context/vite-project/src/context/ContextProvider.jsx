import React, { createContext, useState } from "react";
//create context
export const MainContextCreator = createContext();
const ContextProvider = ({ children }) => {
  const [userDtl, setDtl] = useState([]);
  const GetApi = async () => {
    try {
      const url = "https://randomuser.me/api/";
      const ApiLink = await fetch(url);
      const resp = await ApiLink.json();
      setDtl(resp.results);
    } catch {
      console.log("error in the api which is context Page");
      setDtl([]);
    }
  };
  useEffect(() => {
    GetApi();
  }, []);
  const values = { userDtl, GetApi };
  //provider here
  return (
    <>
      <MainContextCreator.Provider value={values}>
        {children}
      </MainContextCreator.Provider>
    </>
  );
};
export default ContextProvider;
