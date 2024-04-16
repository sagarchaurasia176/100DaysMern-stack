import { createContext, useState } from "react";
import { apiUrl } from "../api/BaseUrl";
//create the contextAPI
export const AllContextData = createContext();
// provider context
export function ContextData({children}) {
  //write all the states what you used into the project
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);
}
//stored into one object
const values = {
  loading,
  setLoading,
  page,
  total,
  setTotal,
};
// async function 
async function apiData(){
    set
    const url = await fetch(apiUrl);
    const convertApi = url.json();
    console.log(convertApi);
}   
// export syntax in the contexAPI
return (
    <div>
      <AllContextData.Provider value={{ text, setText }}>
        <ContextData />
      </AllContextData.Provider>
    </div>
);
export default ContextData;
