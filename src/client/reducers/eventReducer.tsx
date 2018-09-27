import { createReducer } from '../utilities';
import { SET_EVENT_INFO } from '../actions';

const eventInfo = createReducer(null, {
  [SET_EVENT_INFO](state, { eventData = null }) {
    // console.log(eventData, 'eventData');
    return eventData;
  }
});

// handlers are like switch cases in normal reducers

export default eventInfo;
