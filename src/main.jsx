import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { StateContext } from "./Context/useStateContext";
import AuthContext from "./Context/authContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthContext>
      <StateContext>
        <App />
      </StateContext>
    </AuthContext>
  </>
);
