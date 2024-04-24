import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HandlerContextFunction } from "./context/AllStates.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HandlerContextFunction>
      <App />
    </HandlerContextFunction>
  </React.StrictMode>
);
