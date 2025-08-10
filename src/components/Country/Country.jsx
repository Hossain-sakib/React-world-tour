import React, { useState } from "react";
import "./country.css";

const Country = ({ country, handleMarkAsVisited, handleVisitedFlags }) => {
  const { name, flags, population } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited ? "visited" : `non-visited`}`}>
      <img src={flags?.png} alt="" />
      <h3 style={{ color: visited ? `purple` : `white` }}>{name?.common}</h3>
      <p>Population: {population}</p>
      <button onClick={() => handleMarkAsVisited(country)}>
        Mark as visited
      </button>{" "}
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add visited flag
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? `Visited` : `going`}</button>
      <div>{visited ? `I've visited this country` : `I want to visit`}</div>
    </div>
  );
};

export default Country;
