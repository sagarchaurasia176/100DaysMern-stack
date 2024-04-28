import React from "react";
import { useContext } from "react";
import { CounterText } from "../Context/CCcontex";

function Cc() {
  const CounterStat = useContext(CounterText);
  console.log("Counter", CounterStat);

  return (
    <div>
        <p>{CounterStat.num}</p>
      {/* <h1>{CounterStat.num}</h1> */}
      <button onClick={()=>{
            CounterStat.setNum(CounterStat.num + 1)
      }}>Increment</button>
      <button>Decrement</button>
    </div>
  );
}

export default Cc;
