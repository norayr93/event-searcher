const createReducer = (initialState, handlers) => (state = initialState, action) => {
  if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
    // console.log(state, 'state from createReducer');
    // console.log(action, 'action from createReducer');
    // console.log(initialState, 'initialState from createReducer');
    return handlers[action.type](state, action);
  }
  return state;
};

export default createReducer;
