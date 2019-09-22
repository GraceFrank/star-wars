import { combineReducers } from 'redux';

import charactersReducer from './charactersReducer';
import starshipsReducer from './starshipsReducer';
import planetsReducer from './planetsReducer';

export default combineReducers({
  characters: charactersReducer,
  starships: starshipsReducer,
  planets: planetsReducer,
});