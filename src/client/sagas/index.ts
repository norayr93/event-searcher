import { all } from 'redux-saga/effects';
import eventInfoSaga from './eventInfoSaga';
import currentUserSaga from './currentUserSaga';

export default function* rootSaga(): any {
  yield all([
    eventInfoSaga(),
    currentUserSaga()
  ]);
}
