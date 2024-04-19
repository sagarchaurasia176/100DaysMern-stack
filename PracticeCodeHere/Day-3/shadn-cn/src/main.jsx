import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { BrowserRouter } from "react-router-dom";
import AllstatesProvider from "./Context/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
  <AllstatesProvider>
    <App />
  </AllstatesProvider>
  // </BrowserRouter>
);
