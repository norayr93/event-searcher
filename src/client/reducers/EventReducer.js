export default (state = {
  event: {}
}, action) => {
  switch (action.type) {
    case 'SEARCH_EVENT':
      return { event: action.event };
    default:
      return state;
  }
};
