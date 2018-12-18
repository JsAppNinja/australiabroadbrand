import { fork, call, put, takeLatest } from "redux-saga/effects";
//import { fetchBook } from 'api/BookApi';
import {
  getAuthicationAction,
  userLogoutAction,
  getUserAction
} from "./actions";
import { AUTHENTICATE, LOGOUT_USER } from "./actions";

const watchUserStatus = [
  fork(takeLatest, AUTHENTICATE, callUserLogin),
  fork(takeLatest, LOGOUT_USER, callUserLogout)
];

export default function* authSaga() {
  yield [].concat(watchUserStatus);
}

const loginData = {
  user: {
    email: "user@mydomain.com",
    password: "password123"
  },
  auth: true
};

const logoutData = {
  user: {},
  auth: false
};

function* callUserLogin(action) {
  try {
    // Saga part call
    // const bookUuid = action.payload;
    // const response = yield call(fetchBook, bookUuid);
    yield put(getAuthicationAction(true));
  } catch (error) {
    console.log("testing user");
    // yield put(receiveMessageAction(error));
  }
}

function* callUserLogout(action) {
  try {
    // Saga part call
    yield put(userLogoutAction(logoutData));
  } catch (error) {
    console.log("testing auth");
  }
}
