import {createContext, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

import {splitState} from '../utils/stateUtils';

type ContextProps = MemoryState & {
  stateSplitIndex: number;
  setStateSplitIndex: React.Dispatch<React.SetStateAction<number>>;
  setBackState: React.Dispatch<React.SetStateAction<State>>;
  setForwardState: React.Dispatch<React.SetStateAction<State>>;
};
export const MemoryContext = createContext({} as ContextProps);

export default function MemoryContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();

  const [stateSplitIndex, setStateSplitIndex] = useState<number>(-1);
  const [backState, setBackState] = useState<State>([]);
  const [forwardState, setForwardState] = useState<State>([]);

  useEffect(() => {
    if (
      location.state &&
      location.state.length !== [...backState, ...forwardState].length
    ) {
      setBackState([location.state]);
      setForwardState([]);
      setStateSplitIndex(-1);
    }
  }, [location.state]);

  useEffect(() => {
    const newState = splitState(
      [...backState, ...forwardState],
      stateSplitIndex
    );

    setBackState(newState.backState);
    setForwardState(newState.forwardState);
  }, [stateSplitIndex]);

  return (
    <MemoryContext.Provider
      value={{
        backState,
        forwardState,
        stateSplitIndex,
        setStateSplitIndex,
        setBackState,
        setForwardState
      }}
    >
      {children}
    </MemoryContext.Provider>
  );
}
