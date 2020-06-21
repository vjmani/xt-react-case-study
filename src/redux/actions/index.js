import {
  SET_FILTERS,
  UPDATE_FILTERS,
  SET_CHARACTERS,
  GET_FILTERS,
} from "../../util";

export function setCharacters(characters) {
  return {
    type: SET_CHARACTERS,
    characters,
  };
}

// set filters
export function setFilters(filters) {
  return {
    type: SET_FILTERS,
    filters
  };
}

// get filters
export function getFilters() {
  return {
    type: GET_FILTERS
  }
}

// update filters
export function updateFilters(name, value, isSelected) {
  return {
    type: UPDATE_FILTERS,
    name,
    value,
    isSelected,
  };
}
