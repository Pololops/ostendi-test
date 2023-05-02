import {useEffect, useMemo, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import Input from '../Input/Input';
import Select from '../Select/Select';

export default function Form() {
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

console.log('STATE : ',location.state)

  const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    event.preventDefault();
    const {value, name} = event.target;

    if (name === 'back') {
      return navigate(value, {
        state: [...location.state]
      });
    }
    if (name === 'forward') {
      return navigate(value, {
        state: [...location.state]
      });
    }
  };

  const submitFormHandle: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const linkSignature = {id: 'test', label: 'Test', path: inputValue};

    navigate(inputValue, {state: location.state
      ? [...location.state, linkSignature]
      : [linkSignature]});
  };

  useEffect(() => {
    setInputValue(displayPath);
  }, [displayPath, location]);

  return (
    <form className="header__form" onSubmit={submitFormHandle}>
      <Select 
        type="back" 
        onChange={handleSelectChange} />
      <Select
        type="forward"
        onChange={handleSelectChange}
      />
      <Input name="path" value={inputValue} onChange={handleInputChange} />
    </form>
  );
}
