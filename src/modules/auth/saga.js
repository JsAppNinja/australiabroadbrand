import { fork, call, put, takeLatest } from "redux-saga/effects";
//import { fetchBook } from 'api/BookApi';
import { getAuthicationAction } from "./actions";
import { AUTHENTICATE, SET_CURRENT_USER } from "./actions";

export default function* authSaga() {
  yield takeLatest(SET_CURRENT_USER, userLogInSaga);
}

function* userLogInSaga(action) {
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
