import React, { useState } from "react";
const { createContext } = require("react");
export const CreateContextApp = createContext(null);
export const CounterText = ({ children }) => {
    const[num , setNum] = useState(0);
  return (    
    <CreateContextApp.Provider value={num}>
      {children}
    </CreateContextApp.Provider>
  );
};
