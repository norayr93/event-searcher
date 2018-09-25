const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type };
  argNames.forEach((arg, index) => {
    action[arg] = args[index];
  });
  // console.log(action, 'actioon');
  return action;
};

export default makeActionCreator;
