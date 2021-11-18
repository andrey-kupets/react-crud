import { combineReducers } from "redux";
import errorReducer from './error-reducer';
import languageReducer from './language-reducer';
import successMsgReducer from './succesMsg-reducer';
import userReducer from  './user-reducer';

export const reducer = combineReducers({
  error: errorReducer,
  language: languageReducer,
  successMsg: successMsgReducer,
  users: userReducer,
});

export default reducer;
