import {useEffect, useMemo, useState, useContext} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import {MemoryContext} from '../../contexts/memoryContext';

import {findPathInStateByKey} from '../../utils/stateUtils';

import Input from '../Input/Input';
import Select from '../Select/Select';
import { generateLinkSignature } from '../../utils/generateLinkPath';

export default function Form() {
  const {backState, forwardState, setBackState, setForwardState, setStateSplitIndex} =
    useContext(MemoryContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');

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
    const {path, index} = findPathInStateByKey(
      [...backState, ...forwardState],
      parseInt(value)
    );

    navigate(path);
    setStateSplitIndex(index);
  };

  const submitFormHandle: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const id = inputValue.split('/').at(-1);

    if (!id) return;

    const label = id.replace('_', ' ');
    const linkSignature = generateLinkSignature(id, label, inputValue, backState)

    setBackState((prev) => [...prev, linkSignature]);
    setForwardState([]);
    setStateSplitIndex(-1);
    navigate(inputValue);
  };

  useEffect(() => {
    setInputValue(displayPath);
  }, [displayPath]);

  return (
    <form className="header__form" onSubmit={submitFormHandle}>
      <Select type="back" state={backState.slice(0, backState.length - 1 || 0)} onChange={handleSelectChange} />
      <Select
        type="forward"
        state={forwardState}
        onChange={handleSelectChange}
      />
      <Input name="path" value={inputValue} onChange={handleInputChange} />
    </form>
  );
}
