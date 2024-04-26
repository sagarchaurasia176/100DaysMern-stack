import { apiUrl } from "../data";
import { useState, useEffect, createContext } from "react";
//useContext
export const CreateStates = createContext('');
//these all are the producer here
export const HandlerContextFunction = ({ children }) => {
  const ApiUrl = apiUrl;
  const [loading, setLoading] = useState(false);
  const [CardData, setCardData] = useState([]);
  const FilterBtn = async () => {
    try {
      setLoading(true);
      const fetchData = await fetch(ApiUrl);
      const convertData = fetchData.json();
      console.log(convertData);
    } catch {
      console.log("error in the code");
    }
    setLoading(false);
  };
  // calling the API here
  useEffect(() => {
    FilterBtn();
  }, []);

let getData = [];

// all the filterData here passed
  const extratToOneArrData=()=>{
      Object.values(CardData).forEach((category)=>{
          category.forEach((course)=>{
              getData.push(course);
          })
    })
      return getData;
  }



  //exports the context here
  const HandlerValues = {
    loading,
    CardData,
    setCardData,
    extratToOneArrData
  };

  return (
    <>
      <CreateStates.Provider value={HandlerValues}>
        {children}
      </CreateStates.Provider>
    </>
  );
};
