import { makeActionCreator } from '../utilities';

export const GET_USER_INFO: string = 'GET_USER_INFO';
export const getUserInfo: any = makeActionCreator(GET_USER_INFO, 'userData');
