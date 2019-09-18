import { combineReducers } from 'redux';
import starshipReducer from './starshipReducer';

export default combineReducers({
  starships: starshipReducer,
});