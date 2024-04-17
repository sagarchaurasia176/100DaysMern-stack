import React, { createContext, useState } from "react";
// import { API_URL } from '../Api/Baseurl';

export const contextApi = createContext("");
//create the provider means write your states

//then after that call to the () here
export const StatesProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [post, setPost] = useState("");
  
  
  
  const FetchAp
  
  
  
  
  //wrap all the provider to one object
  const valueWrap = {
    loading,
    setLoading,
    page,
    setPage,
    total,
    setTotal,
    post,
    setPost,
  };




  return (
    <contextApi.Provider value={valueWrap}>{children}</contextApi.Provider>
  );
};
