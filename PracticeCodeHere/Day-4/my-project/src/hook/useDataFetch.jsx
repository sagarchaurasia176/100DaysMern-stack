import React, { useEffect, useState } from "react";
import axios from "axios";

function UseData() {
  //states
  const [loading, setLoading] = useState(false);

  const apiHandler = async () => {
    setLoading(true);
    const url = "https://randomuser.me/api/";
    const getConvertData = await axios.get(url);
    setLoading(false);
  };

  useEffect(() => {
    apiHandler();
  }, []);

  return { loading, apiHandler };
}
// calling the functions here
useEffect(() => {
  apiHandler();
}, []);

export default UseData;
