import React from "react";
import ReactDOM from "react-dom";
// React Router version 5.2.0
// we add the <Router> here so that we can use withRouter() method in other components.
import { HashRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
