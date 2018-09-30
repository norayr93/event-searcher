import { makeActionCreator } from '../utilities';

export const SET_EVENT_INFO: string = 'SET_EVENT_INFO';
export const setEventInfo = makeActionCreator(SET_EVENT_INFO, 'eventData');
