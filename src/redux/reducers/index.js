import { combineReducers } from "redux";
import languageReducer from './language-reducer';
import userReducer from  './user-reducer';

export const reducer = combineReducers({
  language: languageReducer,
  users: userReducer,
});

export default reducer;
