/* eslint-disable react/prop-types */
// Lista de contactos
//import { useState, useEffect } from "react";

const Numbers = ({ persons, onDelete }) => {
  /*
  const [contactList, setContactList] = useState(persons)
  useEffect(() => {
    setContactList(persons);
  }, [persons]);
*/
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
            <button onClick={() => onDelete(person)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Numbers;
