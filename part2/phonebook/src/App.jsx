/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import personService from "./services/person";
import Filter from "./components/Filter";
import Numbers from "./components/Numbers";
import Form from "./components/Form";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addName = (event) => {
    event.preventDefault();
    if (!newName.trim() || !newNumber.trim()) {
      alert("Name and number cannot be empty");
      return;
    }
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      return;
    } else if (persons.find((person) => person.number === newNumber)) {
      alert(`${newNumber} is already added to phonebook`);
      setNewNumber("");
      return;
    }
    const nameObject = {
      name: newName,
      number: newNumber,
    };
    personService.create(nameObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });
  };

  const deletePerson = (person) => {
    console.log("Deleting :", person);
    const result = window.confirm(`Delete ${person.name}?`);

    if (result) {
      personService
        .remove(person.id)
        .then(() => {
          setPersons(persons.filter((p) => p.id !== person));
        })
        .catch((error) => {
          console.error("Error deleting person:", error);
        });
    }
  };

  const filteredPersons = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons;

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <Form
        addName={addName}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <Numbers persons={filteredPersons} onDelete={deletePerson} />
    </div>
  );
};

export default App;
