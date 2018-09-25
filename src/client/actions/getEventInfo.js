import { makeActionCreator } from '../utilities';

export const GET_EVENT_INFO = 'GET_EVENT_INFO';
export const getEventInfo = makeActionCreator(GET_EVENT_INFO, 'token', 'query');
