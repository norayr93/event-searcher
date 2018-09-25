import { makeActionCreator } from '../utilities';

export const GET_USER_INFO = 'GET_USER_INFO';
export const getUserInfo = makeActionCreator(GET_USER_INFO, 'userData');
