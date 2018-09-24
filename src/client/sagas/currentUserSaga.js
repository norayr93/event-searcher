import {
  take, put, call, apply
} from 'redux-saga/effects';

import {
  setUserInfo, GET_USER_INFO
} from '../actions';

export default function* currentUserSaga() {
  yield take(GET_USER_INFO);
  const response = yield call(fetch, 'api/current_user');
  const data = yield apply(response, response.json);
  yield put(setUserInfo(data));
}
