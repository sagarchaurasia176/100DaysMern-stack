import React, { useEffect } from "react";

function Card() {
  const btn = () => {
    console.log("clicked");
  };
  useEffect(() => {
    btn();
  }, []);
  return (
    <div>
      <button onClick={btn}>click</button>
    </div>
  );
}

export default Card;
