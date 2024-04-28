import { createContext, useState } from "react";

export const createCounter = createContext(null);
export const CounterMainFnc = ({ Children }) => {
  const [count, setCount] = useState(1);


  
  return <createCounter.Provider value={{ name:"sagar", count,setCount}}>
    {Children}
  </createCounter.Provider>;
};
