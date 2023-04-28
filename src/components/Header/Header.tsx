import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

import Input from '../Input/Input';

import './Header.css';

export default function Header() {
  const location = useLocation();
  const [inputValue, setInputValue] = useState(location.pathname);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setInputValue(event.target.value);
  };

  // TODO : submit a hand writing path
  const submitFormHandle: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log('path submitted : ', inputValue);
  };

  useEffect(() => {
    setInputValue(location.pathname);
  }, [location]);

  return (
    <>
      <header className="header">
        <form className="header__form" onSubmit={submitFormHandle}>
          <Input name="path" value={inputValue} onChange={handleInputChange} />
        </form>
      </header>
    </>
  );
}
