import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContextProvider } from "./Context/ContextProvider.jsx";
// import { AppContextProvider } from "./Context/ContextProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AppContextProvider> */}
    <ContextProvider>
      <App />
    </ContextProvider>
    {/* </AppContextProvider> */}
  </React.StrictMode>
);
