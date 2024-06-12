import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, userClk } from "../slice/Slice";
// counter handler functions
export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handlerClk = () => {
    dispatch(userClk());
    alert("Sagar");
  };
  // return apply here,
  return (
    <>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment{" "}
      </button>
      <span>{count}</span>

      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement{" "}
      </button>

      <button onClick={handlerClk}>click me</button>
    </>
  );
};
