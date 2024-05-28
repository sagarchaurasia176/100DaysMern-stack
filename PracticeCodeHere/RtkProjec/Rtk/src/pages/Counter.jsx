import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Slice/Slice";

export function Counter() {
  const count = useSelector((state) => state.PassedFunction.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1>RTk</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
