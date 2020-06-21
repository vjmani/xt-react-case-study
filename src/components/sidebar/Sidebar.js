import React from "react";
import Filter from "../filter/Filter";

const Sidebar = (props) => {
  return (
    <nav className="filters">
      <h1>Filters</h1>
      <div className="container">
        <div className="row">
          {Object.keys(props.filters).map((key, index) => (
            <Filter
              key={index}
              name={key}
              filters={props.filters[key]}
              handleFilter={props.handleFilter}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
