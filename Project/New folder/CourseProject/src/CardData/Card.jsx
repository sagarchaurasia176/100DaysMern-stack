import { HandlerContextFunction } from "@/context/AllStates";
import Spinner from "@/pages/Spinner";
import React, { useContext } from "react";


function Card() {
  const{loading ,  extratToOneArrData} = useContext(HandlerContextFunction)
  //consumer
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
           extratToOneArrData().map((values) => {
          <>
            <div>
              <img src={values.image.url} alt="" />
              <p>{values.title}</p>
              <span>{values.description}</span>
            </div>
          </>;
        })
      )}
    </div>
  );
}

export default Card;
