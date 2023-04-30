import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import Input from '../Input/Input';

export default function Form() {
  const location = useLocation();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(location.pathname);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setInputValue(event.target.value);
  };

  const submitFormHandle: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    navigate(inputValue);
  };

  useEffect(() => {
    setInputValue(location.pathname);
  }, [location]);

  return (
    <form className="header__form" onSubmit={submitFormHandle}>
      <Input name="path" value={inputValue} onChange={handleInputChange} />
    </form>
  );
}
