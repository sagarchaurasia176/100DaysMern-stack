import React, { useContext , useEffect } from "react";
import { BarLoader } from "react-spinners";
import { ContextCreate } from "../context/AllStates";


function User() {
  const {loading, random} = useContext(ContextCreate);
  console.log(random)
  
  return (
    <div>
      {
        loading ? (<BarLoader/>) : random && random.length > 0 ? (
          <b>Data not found here</b>
        ) : 
        ( random && random.map((val , indx) =>(
          <div className="" key={indx}>
            <p>{val.name.first}</p>
          </div>   
        ))
    ) 
      }
    </div>  
  )
}

export default User;
