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
        <input
          type="search"
          id="search"
          placeholder="Search for a country..."
        />
        <select id="select"></select>
      </div>
      <div className="countries">
        {countries.map((country) => (
          <div className="country-card" key={country.name}>
            <img src={country.flag} alt="" />
            <div className="info-card">
              <h1>{country.name}</h1>
              <p>
                Population: <span>{country.population}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              <p>
                Capital: <span>{country.capital}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
