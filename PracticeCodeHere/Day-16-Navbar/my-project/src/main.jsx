import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import UseContextState from './Context/AllStatesManage.jsx'
import AllStatesManage from "./Context/AllStatesManage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllStatesManage>
      <App />
    </AllStatesManage>
  </React.StrictMode>
);
