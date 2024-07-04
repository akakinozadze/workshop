import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import { Provaider } from "react-redux";
// import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provaider store={store}>
  // </Provaider>
    <Router>
      <App />
    </Router>
);
