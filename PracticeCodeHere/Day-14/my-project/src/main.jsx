import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CounterMainFnc } from "./context/useContex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterMainFnc>
      <App />
    </CounterMainFnc>
  </React.StrictMode>
);
