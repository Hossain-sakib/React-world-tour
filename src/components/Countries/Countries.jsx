import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";


const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,area,languages,currencies,timezones,flags"
    )
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleMarkAsVisited = (country) => {
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  };

  const handleVisitedFlags = (flag) => {
    const newVisitedFlag = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlag);
  };

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h4>Visited Countries:{visitedCountries.length}</h4>
        <ul>
          {visitedCountries.map((country) => (
            <li>{country?.name?.common}</li>
          ))}
        </ul>
      </div>
      <div >
        <h4>Visited Flags:{visitedCountries.length}</h4>
        <ul>
          {visitedFlags.map((flag) => (
            <img src={flag} className="flag-container"></img>
          ))}
        </ul>
      </div>

      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.name?.common}
            handleMarkAsVisited={handleMarkAsVisited}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
