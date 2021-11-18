import { SET_LOADING, SET_ONE_USER, SET_USERS } from "../action-types";

const initialState = {
  loading: null,
  users: [],
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: return { ...state, loading: action.payload };

    case SET_USERS: return { ...state, users: action.payload };

    case SET_ONE_USER:
      return { ...state, user: state.users.find(item => item._id === action.payload) };

    default: return state;
  }
};

export default reducer;

