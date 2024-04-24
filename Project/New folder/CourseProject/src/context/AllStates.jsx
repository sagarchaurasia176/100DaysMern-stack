const { createContext, useEffect, useState } = require("react");
import { apiUrl } from "../data";
//useContext
export const CreateStates = createContext();
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

  const HandlerValues = {
    loading,
    CardData,
    setCardData
  };

    //exports the context here
    return (
        <>
        <CreateStates.Provider value={HandlerValues}>
        {children}
      </CreateStates.Provider>
    </>
  );
};
