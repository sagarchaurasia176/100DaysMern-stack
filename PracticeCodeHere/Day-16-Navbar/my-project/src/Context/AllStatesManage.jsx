import React, { createContext, useState } from "react";
export const createAllStates = createContext();

const AllStatesManage = ({ children }) => {
  //states
  const [toggle, setToggle] = useState(false);
  //create the toogle functions here
  const toggleFunction = () => {
    //modified the functions here
    setToggle(!toggle);
};
      return (
        <createAllStates.Provider value={{ toggle, toggleFunction }}>
      {children}
    </createAllStates.Provider>
  );
};

export default AllStatesManage;