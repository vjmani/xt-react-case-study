import React from "react";
import FilterCheckbox from "../filter-checkbox/FilterCheckbox";

const Filter = (props) => {
  return (
    <div className="col-lg-12 col-12 filter-box">
      <h2>{props.name}</h2>
      <div className="filter-box-section" id="">
        {props.filters.map((filterValue, index) => (
          <FilterCheckbox
            key={index}
            filter={filterValue}
            filterName={props.name}
            handleFilter={props.handleFilter}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
