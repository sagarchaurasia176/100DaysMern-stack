import React, { useContext } from "react";
import { ContextManagers } from "../context/ContextManager";
import Spinner from "./Spinner";

const User = () => {
  const { IncrementBtn,loading, DecrementBtn, txt } = useContext(ContextManagers);
  return (
    <>
      { loading ? (
        <Spinner />
      ) : (
        <>
          <button onClick={() => IncrementBtn()}>IncrementBtn</button>
          <h2>{txt}</h2>
          <button onClick={() => DecrementBtn()}>Decrement Btn</button>
        </>
      )}
    </>
  );
};

export default User;
