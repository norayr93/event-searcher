import { createReducer } from '../utilities';
import { SET_EVENT_INFO } from '../actions';

const eventInfo = createReducer({}, {
  [SET_EVENT_INFO](state: object, { eventData = null }: {eventData: object[] | null}) {
    // console.log(eventData, 'eventData');
    return eventData;
  }
});

// handlers are like switch cases in normal reducers

export default eventInfo;
