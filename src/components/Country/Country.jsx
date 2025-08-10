import React, { useState } from "react";
import "./country.css";

const Country = ({ country }) => {
  const { name, flags, population } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className="country">
      <img src={flags?.png} alt="" />
      <h3>{name?.common}</h3>
      <p>Population: {population}</p>
      <button onClick={handleVisited}>{visited ? `Visited` : `going`}</button>
      <div>{visited ? `I've visited this country` : `I want to visit`}</div>
    </div>
  );
};

export default Country;
