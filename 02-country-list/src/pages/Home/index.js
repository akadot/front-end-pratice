import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  //async function getApi() {
  //  const api = await axios.get("https://restcountries.eu/rest/v2/all");
  //  setData(api);
  //}

  //getApi();

  return (
    <div className="home-container">
      <div className="filters">
        <input type="search" name="" id="" />
        <select name="" id=""></select>
      </div>
      <div className="countries">
        {/*{data.map(function () {
          return [
            <img src={data.flag} alt="" />,
            <h1>{data.name}</h1>,
            <p>Population: {data.population}</p>,
            <p>Region: {data.region}</p>,
            <p>Capital: {data.capital}</p>,
          ];
        })}*/}
      </div>
    </div>
  );
};

export default Home;
