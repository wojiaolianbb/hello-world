import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./route";
ReactDOM.render(
  <Router>
    <Routes>
      {routes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={route.component}
          />
        );
      })}{" "}
    </Routes>
  </Router>,
  document.getElementById("root")
);
