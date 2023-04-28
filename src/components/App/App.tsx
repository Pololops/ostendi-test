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
        <OsiTabs key={tab.id} id={tab.id} label={tab.label}>
          {tab.children &&
            tab.children.map((child) => {
              return (
                <OsiTab
                  key={child.id}
                  id={child.id}
                  label={child.label}
                  isActive={child.isActive}
                  onClick={() =>
                    tabsDispatch({
                      type: TABS_ACTION_TYPES.TOGGLE_ACTIVE,
                      payload: {id: child.id}
                    })
                  }
                >
                  {child.children &&
                    child.isActive &&
                    mappedTabs(child.children)}
                </OsiTab>
              );
            })}
        </OsiTabs>
      );
    });

  useEffect(() => {
    tabsDispatch({type: TABS_ACTION_TYPES.TOGGLE_ACTIVE});
  }, []);

  return (
    <>
      <Header />
      {tabs.length > 0 && mappedTabs(tabs)}
    </>
  );
}

export default App;
