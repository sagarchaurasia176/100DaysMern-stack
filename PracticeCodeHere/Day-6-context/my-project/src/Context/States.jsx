import React, { createContext, useState } from "react";
export const ThemeContext = createContext(false);
// this is my providers
export function States({ children }) {
  const [theme, setTheme] = useState(false);

    //theme logice


  return(<ThemeContext.Provider value={{theme,setTheme}}>
    {children}
  </ThemeContext.Provider>)
}

