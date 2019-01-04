import { all, call } from 'redux-saga/effects';
import authSaga from './auth/saga';

export default function* rootSaga() {
  yield all([call(authSaga)]);
}
