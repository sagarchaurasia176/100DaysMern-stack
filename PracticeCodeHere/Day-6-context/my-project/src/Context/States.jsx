import React, { createContext, useState } from "react";
export const ThemeContext = createContext();
// this is my providers
export function States({ children }) {
  const [theme, setTheme] = useState("dark");

    //theme logice


  return(<ThemeContext.Provider value={{theme,setTheme}}>
    {children}
  </ThemeContext.Provider>)
}

