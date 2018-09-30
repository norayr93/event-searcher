import axios, {
  AxiosPromise
} from 'axios';

import {
  takeEvery, put, call
} from 'redux-saga/effects';

import {
  setEventInfo, GET_EVENT_INFO
} from '../actions';
import { AnyAction } from 'redux';

function* workerSaga({ token, query }: AnyAction) {
  try {
    const options: any = {
      method: 'get',
      url: `https://www.eventbriteapi.com/v3/events/search/?q=${query}&sort_by=best&price=paid&expand=venue`,
      credentials: 'include',
      headers: { Authorization: `Bearer ${token}` }
    };
    const response = yield call(axios, options);
    // console.log(response, 'response eventInfoSaga');
    yield put(setEventInfo(response.data.events));
  } catch (err) {
    console.log(err);
  }
}

export default function* eventInfoSaga() {
  yield takeEvery(GET_EVENT_INFO, workerSaga);
}
