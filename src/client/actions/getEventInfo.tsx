import { makeActionCreator } from '../utilities';

export const GET_EVENT_INFO: string = 'GET_EVENT_INFO';
export const getEventInfo: any = makeActionCreator(GET_EVENT_INFO, 'token', 'query', 'eventData');
