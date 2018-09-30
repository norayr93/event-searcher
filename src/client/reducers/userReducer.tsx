import { createReducer } from '../utilities';
import { GET_USER_INFO } from '../actions';

const userInfo = createReducer({}, {
  [GET_USER_INFO](state: object, { userData = null }: {userData: object[] | null}) {
    // console.log(userData, 'userData from userReducer');
    return userData;
  }
});

// handlers are like switch cases in normal reducers

export default userInfo;
