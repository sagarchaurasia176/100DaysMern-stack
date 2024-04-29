//create context here
import { createContext, useState } from "react";
export const createStates = createContext("");
//provider here
export const ContextStates = ({ children }) => {
  const data = 'sagar cha'
 
    const values = {
        data 
  }
    return (
    <createStates.Provider value={values}>
      {children}
    </createStates.Provider>
  );
};