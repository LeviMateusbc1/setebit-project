import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { HomePage } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route component={HomePage} path="/" exact />
      </Router>
    </BrowserRouter>
  );
}
