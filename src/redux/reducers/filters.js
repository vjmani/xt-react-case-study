import { SET_FILTERS, GET_FILTERS, UPDATE_FILTERS } from "../../util";

function filters(state = {}, action) {
  switch (action.type) {
    case GET_FILTERS:
      return state;
    case SET_FILTERS:
      return { ...state, ...action.filters };
    case UPDATE_FILTERS:
      return { ...state, ...state[action.name].map((filter) => {
        if (filter.name === action.value) {
          filter.selected = action.isSelected;
        }
      })}
    default:
      return state;
  }
}

export default filters;
