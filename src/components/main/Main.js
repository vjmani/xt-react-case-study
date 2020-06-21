import React from "react";
import CharacterCard from "../character-card/CharacterCard";
import SearchBox from "../search/SearchBox";
import SortBy from '../sort/SortBy';

const Main = (props) => {
  return (
    <main className="main">
      <h1>Selected Filters</h1>
      <div className="container">
        <div className="row result-row selected-filters"></div>
        <div className="row search-box result-row">
          <div className="col-lg-6 col-12">
            <SearchBox searchByName={props.searchByName}/>
          </div>
          <div className="col-lg-3 col-12">
            <SortBy sortResults={props.sortResults}/>
          </div>
        </div>
        <div className="row result-row search-results">
          {props.characters.map((character, index) => (
            <div key={index} className="col-lg-3 col-6">
              <CharacterCard character={character} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
