import { createStore, compose } from "redux";
import rootReducer from "./reducers";

// default state
const defaultState = {
  characters: [],
  filters: {},
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, defaultState, enhancers);

export default store;
