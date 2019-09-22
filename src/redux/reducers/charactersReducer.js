import { FETCH_CHARACTERS, SEARCH_CHARACTER } from '../actions/types';

const initialState = {
  items: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        items: action.payload
      }
    case SEARCH_CHARACTER:
      return {
        ...state,
        items: action.payload,
      }

    default:
      return state
  }

}