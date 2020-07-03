import React from "react";

const SelectedFilter = (props) => {
  const filter = props.filter;
  return (
    <div className="col-lg-2 col-4 applied-filter-container">
      <div className="applied-filter">
        <span>{filter.name}</span>
      </div>
    </div>
  );
};

export default SelectedFilter;
