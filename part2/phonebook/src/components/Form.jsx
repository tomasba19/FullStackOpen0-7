/* eslint-disable react/prop-types */
//Agregar Contactos

const Form = ({
  addName,
  handleNameChange,
  handleNumberChange,
  newName,
  newNumber,
}) => {
  return (
    <>
      <div>
        <h2>Add a New Contact</h2>
      </div>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default Form;
