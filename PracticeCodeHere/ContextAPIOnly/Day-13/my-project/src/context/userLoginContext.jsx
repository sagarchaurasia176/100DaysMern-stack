import { createContext, useState } from "react";
//export the createLogin
export const createLogin = createContext();
export const AllStates = ({ children }) => {
  const [user, setUser] = useState("");
  // return this
  const value = { user, setUser };
  return (
    <>
      <createLogin.Provider value={value}>{children}</createLogin.Provider>
    </>
  );
};
