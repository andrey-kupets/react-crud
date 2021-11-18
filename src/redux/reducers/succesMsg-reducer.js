import { SET_SUCCESS_MSG } from '../action-types';

const initialState = {
  successMsg: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUCCESS_MSG:
      return { successMsg: action.payload };

    default: return  state;
  }
};

export default reducer;
