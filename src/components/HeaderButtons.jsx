import { useContext } from "react";
import { ReactComponent as ArrowDown } from "../assets/icon-arrow-down.svg";
import { ReactComponent as IconPlus } from "../assets/icon-plus.svg";
import { OpenContext } from "../contexts/OpenContext";
import FilterStatusForm from "./FilterStatusForm";

const HeaderButtons = () => {
  const { setShowForm } = useContext(OpenContext);
  const { showFilter, setShowFilter } = useContext(OpenContext);
  const toggleShowForm = () => setShowForm(true);
  const toggleShowFilter = () => setShowFilter(!showFilter);
  return (
    <div className="header-buttons">
      <div className="filter-container">
        <div className="filter-status" onClick={toggleShowFilter}>
          <span className="filter-status__title">Filter by status</span>
          <ArrowDown className="filter-status__icon" />
        </div>
        {showFilter && <FilterStatusForm />}
      </div>

      <button onClick={toggleShowForm} className="btn btn-new-invoice">
        <div className="plus-box">
          <IconPlus />
        </div>
        <span>New Invoice</span>
      </button>
    </div>
  );
};

export default HeaderButtons;
