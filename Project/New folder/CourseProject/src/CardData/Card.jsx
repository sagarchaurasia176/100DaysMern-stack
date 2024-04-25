import { HandlerContextFunction } from "@/context/AllStates";
import Spinner from "@/pages/Spinner";
import React, { useContext } from "react";

function Card() {
  //consumer
  const { loading, CardData } = useContext(HandlerContextFunction);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : CardData.length >= 0 ? (
        <b>Data not found here!</b>
      ) : (
        CardData &&
        CardData.map((values) => (
          <>
            <div>
              {/* <img src={} alt="" />  */}
              <p></p>
              <span></span>
            </div>
          </>
        ))
      )}
    </div>
  );
}

export default Card;
