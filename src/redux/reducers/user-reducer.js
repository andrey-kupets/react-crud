import { ADD_USER, DELETE_USER, SET_LOADING, SET_ONE_USER, SET_USERS } from "../action-types";

const initialState = {
  loading: null,
  users: [],
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: return { ...state, loading: action.payload };

    case SET_USERS: return { ...state, users: action.payload }

    case SET_ONE_USER: return { ...state, user: action.payload };

    // case ADD_USER: return { ...state, users: state.users.push(action.payload) };
    //
    // case DELETE_USER: return  { ...state, users: state.users.filter(user => user._id === action.payload) }

    default: return state;
  }
};

export default reducer;
