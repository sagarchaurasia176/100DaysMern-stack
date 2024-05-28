import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// store page
import { Provider } from "react-redux";
import Store from "./store/Store.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* wrapped store */}
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
