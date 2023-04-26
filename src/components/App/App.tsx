import {useEffect} from 'react';

import {useTabsContext} from '../../context/tabsContext';
import {ACTION_TYPES} from '../../reducer/tabsReducer';

import OsiTabs from '../OsiTabs/OsiTabs';
import OsiTab from '../OsiTab/OsiTab';

import './App.module.css';

function App() {
  const {tabs, tabsDispatch} = useTabsContext();

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
    tabsDispatch({type: ACTION_TYPES.TOGGLE_ACTIVE});
  }, []);

  return (
    <OsiTabs id="tabs_0" label="Root tab bar">
      {tabs.length > 0 && mappedTabs(tabs)}
    </OsiTabs>
  );
}

export default App;
