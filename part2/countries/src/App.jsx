import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country";
import countryService from "./services/country";
import Filter from "./components/Filter";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");


  useEffect(() => {
    countryService.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);

  const filteredCountries = filter
  ? countries.filter((country) =>
      country.name.common.toLowerCase().includes(filter.toLowerCase())
    )
  : countries;
  
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  return (
    <div>
      <h1>Countries</h1>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Country countries={filteredCountries} />
    </div>
  );
}

export default App;
