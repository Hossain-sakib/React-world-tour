import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

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

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h4>Visited Countries:{visitedCountries.length}</h4>
      </div>

      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.name?.common}
            handleMarkAsVisited={handleMarkAsVisited}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
