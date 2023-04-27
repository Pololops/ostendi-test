import {useEffect} from 'react';
import {useGlobalContext} from '../../hooks/useGlobalContext';

import {TABS_ACTION_TYPES} from '../../reducers/tabsReducer';

import Header from '../Header/Header';
import OsiTabs from '../OsiTabs/OsiTabs';
import OsiTab from '../OsiTab/OsiTab';

import './App.module.css';

function App() {
  const {tabs, tabsDispatch} = useGlobalContext();

  const mappedTabs = (tabs: TabType[]) =>
    tabs.map((tab) => {
      return (
        <OsiTab
          key={tab.id}
          id={tab.id}
          label={tab.label}
          isActive={tab.isActive}
        >
          {tab.children && tab.isActive && (
            <OsiTabs key={tab.id} id={tab.id} label={tab.label}>
              {mappedTabs(tab.children)}
            </OsiTabs>
          )}
        </OsiTab>
      );
    });

  useEffect(() => {
    tabsDispatch({type: TABS_ACTION_TYPES.TOGGLE_ACTIVE});
  }, []);

  return (
    <>
      <Header />
      <OsiTabs id="tabs_0" label="Root tab bar">
        {tabs.length > 0 && mappedTabs(tabs)}
      </OsiTabs>
    </>
  );
}

export default App;
