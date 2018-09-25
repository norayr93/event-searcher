import axios from 'axios';

import {
  take, put, call
} from 'redux-saga/effects';

import {
  getEventInfo, GET_EVENT_INFO
} from '../actions';

export default function* eventInfoSaga() {
  try {
    const { token, query } = yield take(GET_EVENT_INFO);
    const options = {
      credentials: 'include',
      headers: { Authorization: `Bearer ${token}` }
    };
    const response = yield call(axios,
      `https://www.eventbriteapi.com/v3/events/search/?q=${query}&expand=venue`,
      options);
    console.log(response, 'response eventInfoSaga');
    yield put(getEventInfo(response));
  } catch (err) {
    console.log(err);
  }
}
