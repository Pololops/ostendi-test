import {useEffect} from 'react';
import {useGlobalContext} from '../../hooks/useGlobalContext';
import {Outlet} from 'react-router';

import {TABS_ACTION_TYPES} from '../../reducers/tabsReducer';

import Header from '../Header/Header';
import OsiTabs from '../OsiTabs/OsiTabs';

import './App.css';

function App() {
  const {tabs, tabsDispatch} = useGlobalContext();

  useEffect(() => {
    tabsDispatch({type: TABS_ACTION_TYPES.TOGGLE_ACTIVE});
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
