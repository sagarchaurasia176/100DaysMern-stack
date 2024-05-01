import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContextManager } from "./context/ContextManager.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* it is basically our () */}
    <ContextManager>
      <App />
    </ContextManager>
  </React.StrictMode>
);
