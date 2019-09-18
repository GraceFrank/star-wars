import { FETCH_STARSHIPS, NEW_STARSHIP } from '../actions/types';

const initialState = {
  items: [],
  item: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_STARSHIPS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state
  }

}