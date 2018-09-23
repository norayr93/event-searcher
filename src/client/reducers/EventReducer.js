export default (state = {}, action) => {
  switch (action.type) {
    case 'IS_AUTH':
      return { event: action.event };
    default:
      return state;
  }
};
