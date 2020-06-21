import { combineReducers } from "redux";

import filters from "./filters";
import characters from "./characters";

const rootReducer = combineReducers({ filters, characters });

export default rootReducer;
