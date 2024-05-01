import React, { createContext, useState } from "react";
// target to complete from this project is
// dark mode and card data from api
//context Provider here
export const AllContextProvider = createContext();
// export the context API here
export const AllStatesContex = ({ children }) => {
  //all the states
  const [theme, setTheme] = useState(false);
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  //API Calling now
  const BlogData = async () => {
    try {
        setLoading(true);
        const API_URL = "https://codehelp-apis.vercel.app/api/get-blogs";
        const fetchAPI = await fetch(API_URL);
        const response = await fetchAPI.json();
        console.log(response);
        setPost(response.post);
        setLoading(false);
    } catch (er) {console.log("error in the contextAPI while fetching the api")
        
    setPost([]);

}
};
  // values from the fucntion
  const Values = {
    BlogData,
    theme,
    setTheme,
    loading,
    post,
    setPost,
  };

  return (
    <AllContextProvider.Provider value={Values}>
      {children}
    </AllContextProvider.Provider>
  );
};

export default AllStatesContex;
