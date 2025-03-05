import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // Optional global styles

const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

