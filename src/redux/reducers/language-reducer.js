import { SET_LANGUAGE } from '../action-types';

const initialState = {
  language: 'en'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE: return { language: action.payload };

    default: return  state;
  }
};

export default reducer;
