import { SET_ERROR } from '../action-types';

const initialState = {
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR: return { error: action.payload };

    default: return  state;
  }
};

export default reducer;
