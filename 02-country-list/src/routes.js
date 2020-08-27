import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import Info from "./pages/Info/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/infos" component={Info} />
    </BrowserRouter>
  );
};

export default Routes;
