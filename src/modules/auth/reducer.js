import {
  AUTHENTICATE,
  LOGIN_USER,
  SET_CURRENT_USER,
  LOGOUT_USER
} from "./actions";

const initialState = {
  isAuthenticated: false,
  currentUser: {}
};

function auth(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: action.payload
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.palyload !== undefined ? action.palyload.name : {},
        isAuthenticated:
          action.palyload !== undefined ? action.palyload.auth : false
      };
    case LOGOUT_USER:
      return {
        ...state,
        currentUser: action.palyload.user,
        isAuthenticated: action.palyload.auth
      };
    default:
      return state;
  }
}

export default auth;
