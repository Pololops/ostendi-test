import {useEffect, useState} from 'react';
import {useGlobalContext} from '../../hooks/useGlobalContext';
import Input from '../Input/Input';

import {ROUTES_ACTION_TYPES} from '../../reducers/routesReducer';
import {TABS_ACTION_TYPES} from '../../reducers/tabsReducer';


import './Header.css';

export default function Header() {
  const {routes, routesDispatch, tabsDispatch} = useGlobalContext();
  const route = routes[0] ? `tabs_0${routes[0]}` : 'tabs_0';

  const [inputValue, setInputValue] = useState(route);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const submitFormHandle: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const id = inputValue.split('/').at(-1) || 'tabs_0';
    console.log(id);
    tabsDispatch({
      type: TABS_ACTION_TYPES.TOGGLE_ACTIVE,
      payload: {id},
    });
    routesDispatch({
      type: ROUTES_ACTION_TYPES.ADD_ROUTE,
      payload: {id},
    });
  };

  useEffect(() => {
    setInputValue(route);
  }, [route]);

  return (
    <header className="header">
      <form className="header__form" onSubmit={submitFormHandle}>
        <Input value={inputValue} onChange={handleInputChange} />
      </form>
    </header>
  );
}
