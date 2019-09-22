import { FETCH_STARSHIPS, SEARCH_STARSHIP } from '../actions/types';

const initialState = {
  items: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_STARSHIPS:
      return {
        ...state,
        items: action.payload
      }
    case SEARCH_STARSHIP:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state
  }

}