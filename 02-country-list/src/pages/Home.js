import React, { useState } from "react";

import getApi from "../functions/ApiConnect";

const Home = () => {
  const [country, setCountry] = useState("");
  return (
    <>
      <input type="text" onChange={(event) => setCountry(event.target.value)} />
      <button onClick={() => getApi(country)}>Buscar</button>
    </>
  );
};

export default Home;
