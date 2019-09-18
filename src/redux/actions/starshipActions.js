import { FETCH_STARSHIPS, NEW_STARSHIP } from './types';

export const fetch_starships = () => dispatch => {
  fetch('https://swapi.co/api/people/')
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_STARSHIPS,
      payload: data,
    }))
}
