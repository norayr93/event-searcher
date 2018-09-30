import { all } from 'redux-saga/effects';
import eventInfoSaga from './eventInfoSaga';
import currentUserSaga from './currentUserSaga';

export default function* rootSaga() {
  yield all([
    eventInfoSaga(),
    currentUserSaga()
  ]);
}
