import React from "react";

const FilterCheckbox = ({ filterName, filter, handleFilter }) => {
  return (
    <label htmlFor={filter.name}>
      <input
        className="filter-checkbox"
        type="checkbox"
        name={filterName}
        value={filter.name}
        id={filter.name}
        onChange={(e) => {
          console.log(e.currentTarget.checked);
          handleFilter(filterName, filter.name, e.currentTarget.checked);
        }}
      />
      {filter.name}
    </label>
  );
};

export default FilterCheckbox;
