import React, { createContext, useState } from "react";
// //manager creates here
export const ContextManagers = createContext(null);

export const ContextManager = ({ children }) => {
  const [txt, setTxt] = useState(1);
  const[loading , setLoading] = useState(false);

  function IncrementBtn() {
    try{
        setLoading(true)
        setTxt(txt + 1);
        setLoading(false)
    }
    catch{
        console.log("error")
    }
   
  }
  function DecrementBtn() {
    try{
        setLoading(true)
        setTxt(txt - 1);
        setLoading(false);
    }
    catch{
        console.log("error")
    }
  }

  const values = {
    txt,
    IncrementBtn,
    DecrementBtn,
    loading
  };
  return (
    <ContextManagers.Provider value={values}>
      {children}
    </ContextManagers.Provider>
  );
};
