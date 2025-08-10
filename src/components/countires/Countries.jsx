import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [countires, setCountires] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all/"
    )
      .then((res) => res.json)
      .then((data) => setCountires(data))
  }, []);
    return (
        <div>
            <h3>Countries: {countires.length}</h3>
        </div>
    );
};

export default Countries;