import axios from 'axios';

import {
  takeEvery, put, call
} from 'redux-saga/effects';

import {
  getEventInfo, GET_EVENT_INFO
} from '../actions';

function* workerSaga(args) {
  try {
    const { token, query } = args;
    // console.log(token, 'tokeeeeeeeeeeeen sagaaaaaaaaaa');
    // console.log(query, 'query sagaaaaaaaaaaaaaaaa');
    console.log(args, 'argsssssssssssssssssssssssssssss');
    const options = {
      method: 'get',
      url: `https://www.eventbriteapi.com/v3/events/search/?q=${query}&sort_by=best&price=paid&expand=venue`,
      credentials: 'include',
      headers: { Authorization: `Bearer ${token}` }
    };
    const response = yield call(axios, options);
    console.log(response, 'response eventInfoSaga');
    // first two arguments are token and query, which dont need to dispatch to store
    yield put(getEventInfo(token, query, response.data.events));
    return;
  } catch (err) {
    console.log(err);
  }
}

export default function* eventInfoSaga() {
  yield takeEvery(GET_EVENT_INFO, workerSaga);
}
