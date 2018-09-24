import {
  take, put, call, apply
} from 'redux-saga/effects';

import {
  getEventInfo, GET_EVENT_INFO
} from '../actions';

export default function* eventInfoSaga() {
  const { token, query } = yield take(GET_EVENT_INFO);
  const options = {
    credentials: 'include',
    headers: { Authorization: `Bearer ${token}` }
  };
  const response = yield call(fetch,
    `https://www.eventbriteapi.com/v3/events/search/?q=${query}&expand=venue`, options);
  console.log(response, 'response eventInfoSaga');
  const data = yield apply(response, response.json);
  yield put(getEventInfo(data));
}
