import { fork, call, put, takeLatest } from 'redux-saga/effects';
import { getAuthicationAction } from './actions';
import { AUTHENTICATE, SET_CURRENT_USER } from './actions';

export default function* authSaga() {
  yield takeLatest(SET_CURRENT_USER, userLogInSaga);
}

function* userLogInSaga(action) {}
