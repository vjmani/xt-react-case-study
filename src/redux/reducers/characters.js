import { SET_CHARACTERS } from "../../util";

function characters(state = [], action) {
  switch (action.type) {
    case SET_CHARACTERS:
      return { ...state, data: [...action.characters] };

    default:
      return state;
  }
}

export default characters;
