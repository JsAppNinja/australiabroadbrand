export const AUTHENTICATE = "auth/AUTHENTICATE";
export const SET_CURRENT_USER = "auth/SET_CURRENT_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export function getAuthicationAction(authenticated) {
  return {
    type: AUTHENTICATE,
    authenticated
  };
}

export function getUserAction(user) {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
}

export function userLoginAction(data) {
  return {
    type: LOGIN_USER,
    payload: data
  };
}

export function userLogoutAction(data) {
  return {
    type: LOGOUT_USER,
    payload: data
  };
}
