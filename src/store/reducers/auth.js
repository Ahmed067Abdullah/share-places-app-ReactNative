import { LOGIN, LOGOUT } from "../actions/actionTypes";

const initialState = {
  isAuthenticated: false,
  username: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        username: action.username
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        username: ""
      };
    default:
      return state;
  }
};

export default reducer;
