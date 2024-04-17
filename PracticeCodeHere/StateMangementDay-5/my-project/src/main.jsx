import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StatesProvider } from "./context/AllStates.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StatesProvider>
      <App />
    </StatesProvider>
  </React.StrictMode>
);
