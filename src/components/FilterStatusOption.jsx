const FilterStatusOption = ({ status }) => {
  return (
    <ul className="filter-form__category">
      <input name="filter" type="radio" />
      <span>{status}</span> 
    </ul>
  );
};

export default FilterStatusOption; 
