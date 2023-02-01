import FilterStatusOption from "./FilterStatusOption";

const FilterStatusForm = () => {
  return (
    <form className="filter-form header-filter-position" action="#">
      <FilterStatusOption status="paid" />
      <FilterStatusOption status="draft" />
      <FilterStatusOption status="pending" />
      <FilterStatusOption status="all" />
    </form>
  );
};

export default FilterStatusForm;
