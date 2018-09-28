interface Action {
  type: string,
  [arg: string]: any
}

const makeActionCreator = (type: string, ...argNames: string[]) => (...args: string[]): Action => {
  const action: Action = { type };
  argNames.forEach((arg: string, index: number) => {
    action[arg] = args[index];
  });
  console.log(action, 'actioooooooooooon');
  return action;
};

export default makeActionCreator;
 