import axiosQueries from '../../queries';

import {
  FETCH_CHARACTERS,
  SEARCH_CHARACTER,

  FETCH_STARSHIPS,
  SEARCH_STARSHIP,

  FETCH_PLANETS,
  SEARCH_PLANET,
} from './types';

export function fetch_characters() {
  return async function (dispatch) {
    await axiosQueries.Get('people/')
      .then(data => dispatch({
        type: FETCH_CHARACTERS,
        payload: data,
      }))
  }
}
export function search_character(searchData) {
  return async function (dispatch) {
    await axiosQueries.Get(`people/?search=${searchData}`)
      .then(data => dispatch({
        type: SEARCH_CHARACTER,
        payload: data,
      }))
  }
}

/* using arrow function without async and await */
export const fetch_starships = () => dispatch => {
  axiosQueries.Get('starships/')
    .then(data => dispatch({
      type: FETCH_STARSHIPS,
      payload: data,
    }))
}
export const search_starship = (searchData) => dispatch => {
  axiosQueries.Get(`starships/?search=${searchData}`)
    .then(data => dispatch({
      type: SEARCH_STARSHIP,
      payload: data,
    }))
}

export const fetch_planets = () => dispatch => {
  axiosQueries.Get('planets/')
    .then(data => dispatch({
      type: FETCH_PLANETS,
      payload: data,
    }))
}
export const search_planet = (searchData) => dispatch => {
  axiosQueries.Get(`planets/?search=${searchData}`)
    .then(data => dispatch({
      type: SEARCH_PLANET,
      payload: data,
    }))
}

/* if you want to use a fetch api instedad */
// export const fetch_starships = () => dispatch => {
//   fetch('https://swapi.co/api/starships/')
//     .then(res => res.json())
//     .then(data => dispatch({
//       type: FETCH_STARSHIPS,
//       payload: data,
//     }))
// }

