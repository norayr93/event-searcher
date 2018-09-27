import axios from 'axios';

import {
  take, put, call
} from 'redux-saga/effects';

import { getUserInfo, GET_USER_INFO } from '../actions';

export default function* currentUserSaga() {
  try {
    yield take(GET_USER_INFO);
    const response = yield call(axios, '/api/current_user');
    // console.log(response, 'responseee from user saga');
    yield put(getUserInfo(response.data));
  } catch (err) {
    console.log(err);
  }
}
