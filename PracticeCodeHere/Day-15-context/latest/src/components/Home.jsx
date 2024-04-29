import React, { useContext } from "react";
import { createStates } from "../context/ContextStates";

const Home = () => {
  const { data } = useContext(createStates);

  return (
    <div>
        <h1>{data}</h1>
    </div>
  );
};

export default Home;
