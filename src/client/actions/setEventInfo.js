import { makeActionCreator } from '../utilities';

export const SET_EVENT_INFO = 'SET_EVENT_INFO';
export const setEventInfo = makeActionCreator(SET_EVENT_INFO, 'eventData');
