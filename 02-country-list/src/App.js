import React from "react";

import Routes from "./routes";
import Header from "./components/Header";

import "./style/global.css";

const App = () => {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
};

export default App;
