import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

import App from "../app/App";

function mapStateToProps(state) {
  return {
    characters: state.characters,
    filters: state.filters,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const CharactersApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default CharactersApp;
