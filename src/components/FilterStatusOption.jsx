const FilterStatusOption = ({status}) => {
  return (
    <ul className="filter-form__category">
      <input type="checkbox" />
      <span>{status}</span>
    </ul>
  );
};

export default FilterStatusOption;
