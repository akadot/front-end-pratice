import React from "react";
import axios from "axios";

import "./style.css";

const Home = () => {
  (async function getApi() {
    try {
      const { data } = await axios(
        "https://restcountries.eu/rest/v2/all?fields=name;flag;population;region;capital"
      );
      await localStorage.setItem("countries", JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  })();

  const countries = JSON.parse(localStorage.getItem("countries"));

  return (
    <div className="home-container">
      <div className="filters">
        <input type="search" name="" id="" />
        <select name="" id=""></select>
      </div>
      <div className="countries">
        {countries.map((country) => (
          <div className="country-card" key={country.name}>
            <img src={country.flag} alt="" />
            <h1>{country.name}</h1>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
