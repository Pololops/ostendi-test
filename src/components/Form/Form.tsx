import {useEffect, useMemo, useState} from 'react';
import {useLocation, useMatch, useNavigate} from 'react-router-dom';

import Input from '../Input/Input';
import Select from '../Select/Select';

type BackState = State;
type ForwardState = State;
type HistoryState = {
  backState: BackState;
  forwardState: ForwardState;
};

const splitState = (state: State, index: number): HistoryState => {
  const indexToSplit = index >= 0 ? index : state.length;
  const backState = state.slice(0, indexToSplit);
  const forwardState = state.splice(indexToSplit + 1);
  return {backState, forwardState};
};

export default function Form() {
  const location = useLocation();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [stateIndex, setStateIndex] = useState<number>(-1);
  const [state, setState] = useState<HistoryState>({
    backState: [],
    forwardState: []
  });

  const displayPath = useMemo(() => {
    const isRootPath = location.pathname.endsWith('tabs_0');
    const isTabsPath = location.pathname.split('/').at(-1)?.includes('tabs_');
    if (isRootPath || !isTabsPath) {
      return location.pathname;
    }
    return location.pathname.split('/').slice(0, -1).join('/');
  }, [location]);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    event.preventDefault();
    const {value} = event.target;
    const joinState = [...state.backState, ...state.forwardState];
    const index = joinState.findIndex(({key}) => key === value);

    setStateIndex(index);
    navigate(joinState[index].path, {
      state: joinState
    });
  };

  const submitFormHandle: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const id = inputValue.split('/').at(-1);
    if (!id) return;
    const label = id.replace('_', ' ');
    const linkSignature: LinkSign = {
      id,
      label: label.charAt(0).toUpperCase() + label.slice(1),
      path: inputValue,
      key:
        location.state && 'key' in location.state.at(-1)
          ? location.state.at(-1).key + 1
          : '1'
    };

    navigate(inputValue, {
      state: location.state
        ? [...location.state, linkSignature]
        : [linkSignature]
    });
  };

  useEffect(() => {
    if (location.state !== null) {
      const newState = splitState(location.state, stateIndex);
      setState(newState);
    }
  }, [location.pathname, location.state, stateIndex]);

  useEffect(() => {
    const joinState = [...state.backState, ...state.forwardState];
    const newState = splitState(joinState, stateIndex);

    setState(newState);
  }, [stateIndex]);

  useEffect(() => {
    setInputValue(displayPath);
  }, [displayPath]);

  return (
    <form className="header__form" onSubmit={submitFormHandle}>
      <Select
        type="back"
        state={state.backState}
        onChange={handleSelectChange}
      />
      <Select
        type="forward"
        state={state.forwardState}
        onChange={handleSelectChange}
      />
      <Input name="path" value={inputValue} onChange={handleInputChange} />
    </form>
  );
}
