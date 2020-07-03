import React from "react";
import "./App.scss";
import Sidebar from "../sidebar/Sidebar";
import Main from "../main/Main";
import { API_URL, checkValue, ASC_ORDER, DESC_ORDER } from "../../util";

class App extends React.Component {
  state = {
    characters: [],
    filters: {},
  };

  species = new Set();
  gender = new Set();
  origin = new Set();

  componentDidMount() {
    this.getCharactersData();
  }

  async getCharactersData() {
    const characterPromise = fetch(API_URL).then((response) => response.json());

    const result = await characterPromise;
    const characterData = this.createStateData(result.results);

    this.props.setCharacters(characterData.card);
    this.props.setFilters(characterData.filters);

    this.setState({
      characters: this.props.characters.data,
      filters: characterData.filters,
    });
  }

  createStateData(data) {
    const res = {};
    res["card"] = data;
    for (let item of data) {
      res["filters"] = this.getFiltersData(item);
    }
    return res;
  }

  getFiltersData(item) {
    this.species.add(item.species);
    this.gender.add(item.gender);
    this.origin.add(item.origin.name);

    return {
      species: this.getFilterObj([...this.species]),
      gender: this.getFilterObj([...this.gender]),
      origin: this.getFilterObj([...this.origin]),
    };
  }

  getFilterObj(filters) {
    return filters.map((filter) => {
      return { name: filter, selected: false };
    });
  }

  handleFilter = (name, value, isSelected) => {
    this.props.updateFilters(name, value, isSelected);
    this.filterData();
  };

  filterData = () => {
    const filterKeys = Object.keys(this.props.filters);
    const selectedFilters = {};
    filterKeys.map((key) => {
      if (this.props.filters[key] && this.props.filters[key].length > 0) {
        selectedFilters[key] = this.props.filters[key]
          .filter((filter) => filter.selected)
          .map((filter) => filter.name);
      }
    });
    const selectedCharacters = this.getSelectedCharacters(
      selectedFilters,
      this.props.characters.data
    );

    this.setState({ characters: selectedCharacters });
  };

  getSelectedCharacters = (filters, data) => {
    const filterKeys = Object.keys(filters);

    return data.filter((item) => {
      return filterKeys.every((key) => {
        if (!filters[key].length) return true;
        return filters[key].find((filter) => {
          if (typeof item[key] === "object") {
            return checkValue(filter) === checkValue(item[key]["name"]);
          } else {
            return checkValue(filter) === checkValue(item[key]);
          }
        });
      });
    });
  };

  searchByName = (name) => {
    const searchResults = this.state.characters.filter((res) => {
      const regx = new RegExp(name.toLowerCase());
      const resNameCheck = res.name.toLowerCase().match(regx);
      return resNameCheck !== null;
    });

    this.setState({ characters: searchResults });
  };

  sortResults = (order) => {
    let results = this.state.characters;
    if (order === ASC_ORDER) {
      results.sort((a, b) => {
        return a.id - b.id;
      });
    } else if (order === DESC_ORDER) {
      results.sort((a, b) => {
        return b.id - a.id;
      });
    }

    this.setState({ characters: results });
  };

  render() {
    return (
      <>
        <Sidebar
          filters={this.state.filters}
          handleFilter={this.handleFilter}
        />
        <Main
          characters={this.state.characters}
          searchByName={this.searchByName}
          sortResults={this.sortResults}
          filterData={this.filterData}
          filters={this.state.filters}
        />
      </>
    );
  }
}

export default App;
