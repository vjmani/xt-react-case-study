import React from "react";
import { ASC_ORDER, DESC_ORDER } from "../../util";

const SortBy = (props) => {
  const handleChange = (event) => {
    props.sortResults(event.target.value);
  };

  return (
    <div className="form-group">
      <select
        onChange={handleChange}
        className="form-control"
      >
        <option value="">Sort by ID</option>
        <option value={ASC_ORDER}>Ascending</option>
        <option value={DESC_ORDER}>Descending</option>
      </select>
    </div>
  );
};

export default SortBy;
