import { createReducer } from '../utilities';
import { GET_EVENT_INFO } from '../actions';

const eventInfo = createReducer(null, {
  [GET_EVENT_INFO](state, { eventData = null }) {
    console.log(eventData, 'eventData');
    return eventData;
  }
});

// handlers are like switch cases in normal reducers

export default eventInfo;
