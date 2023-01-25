import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { StateContext } from "./Context/useStateContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <StateContext>
      <App />
    </StateContext>
  </>
);
