type BackState = State;
type ForwardState = State;
type HistoryState = {
  backState: BackState;
  forwardState: ForwardState;
};

export const splitState = (state: State, key: number): HistoryState => {
  let index = state.findIndex((link) => link.key === key);

  if (index < 0) {
    index = state.length - 1;
  }
  
  const backState = state.slice(0, index + 1);
  const forwardState = state.splice(index + 1);
  
  return { backState, forwardState };
};

export const findPathInStateByKey = (state: State, key: number): {path: string, index: number} => {  
  let index = state.findIndex((link) => link.key === key);
  
  if (index < 0) {
    index = state.length - 1;
  }
  
  const path = state[index].path;

  return {
    path,
    index,
  };
}
