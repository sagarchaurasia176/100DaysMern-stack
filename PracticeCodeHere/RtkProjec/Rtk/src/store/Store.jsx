import React from "react";
import Slice from "../Slice/Slice";
// Redux Manger
import { configureStore } from "@reduxjs/toolkit";
export const Store = configureStore({
  reducer: {
    // passedFunction :- is slice function name
    PassedFunction: Slice,
    // here slice is predefined
  },
});
export default Store;
