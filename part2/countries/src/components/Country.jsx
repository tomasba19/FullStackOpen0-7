/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Country.css";

const Country = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  //////////// IF MORE THAN 10 //////////////
  if (countries.length > 10) {
    return <h2>Too many matches, be more specific</h2>;
  }

  //////////// IF MORE THAN 1 AND LESS THAN 10 //////////////

  if (countries.length <= 10 && countries.length > 1) {
    return (
      <div className="container">
        <div>
          <ul className="lista">
            {countries.map((country) => (
              <li key={country.name.common}>
                {country.name.common}
                <button onClick={() => setSelectedCountry(country)}>
                  Show
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="info">
          {selectedCountry && (
            <div>
              <h2>{selectedCountry.name.common}</h2>
              <h3>Capital: {selectedCountry.capital}</h3>
              <p>Area: {selectedCountry.area}</p>
              <p>Population: {selectedCountry.population}</p>
              <img
                src={selectedCountry.flags.png}
                alt="flag"
                width="300"
                height="200"
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  //////////// IF 1 //////////////
  if (countries.length === 1) {
    return (
      <div>
        <h2>{countries[0].name.common}</h2>
        <h3>Capital: {countries[0].capital}</h3>
        <p>Area: {countries[0].area}</p>
        <p>Population: {countries[0].population}</p>
        <img src={countries[0].flags.png} alt="flag" width="300" height="200" />
      </div>
    );
  }

  return null;
};

export default Country;
