import createReducer from '../utilities';
import { GET_USER_INFO } from '../actions';

const userInfo = createReducer(null, {
  [GET_USER_INFO](state, { value }) {
    return value;
  }
});

// handlers are like switch cases in normal reducers

export default userInfo;
