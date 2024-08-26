// Filtros
// eslint-disable-next-line react/prop-types
const Filter = ({ filter, onChange }) => {
    return (
      <div>
        <div>
          Filter shown with <input value={filter} onChange={onChange} />
        </div>
      </div>
    );
  };


  export default Filter;