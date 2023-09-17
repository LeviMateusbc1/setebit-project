import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={HomePage} path="/" exact />
    </BrowserRouter>
  );
};

export default Routes;
