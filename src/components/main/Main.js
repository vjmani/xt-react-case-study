import React from "react";
import CharacterCard from "../character-card/CharacterCard";
import SearchBox from "../search/SearchBox";
import SortBy from "../sort/SortBy";
import SelectedFilter from "../selected-filter/SelectedFilter";

const Main = (props) => {
  const filters = props.filters;
  const filtersType = Object.keys(filters);
  let selectedFilters = [];
  filtersType.map((fl) => {
    filters[fl].map((filter) => {
      if (filter.selected) {
        selectedFilters.push(filter);
      }
    });
  });

  let characterCards = "";
  if (props.characters && props.characters.length > 0) {
    characterCards = props.characters.map((character, index) => (
      <div key={index} className="col-lg-3 col-6 character-col">
        <CharacterCard character={character} />
      </div>
    ));
  } else {
    characterCards = <div className="no-result-found">No Result Found</div>;
  }

  return (
    <main className="main">
      <h1>Selected Filters</h1>
      <div className="container">
        <div className="row result-row selected-filters">
          {selectedFilters.map((filter, index) => (
            <SelectedFilter key={index} filter={filter} />
          ))}
        </div>
        <div className="row search-box result-row">
          <div className="col-lg-6 col-12">
            <SearchBox
              searchByName={props.searchByName}
              filterData={props.filterData}
            />
          </div>
          <div className="col-lg-3 col-12">
            <SortBy sortResults={props.sortResults} />
          </div>
        </div>
        <div className="row result-row search-results">{characterCards}</div>
      </div>
    </main>
  );
};

export default Main;
