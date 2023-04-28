// import {useEffect} from 'react';
// import {useGlobalContext} from '../../hooks/useGlobalContext';

// import {TABS_ACTION_TYPES} from '../../reducers/tabsReducer';
import tabs from '../../states/tabState';
import OsiTabs from '../OsiTabs/OsiTabs';
import OsiTab from '../OsiTab/OsiTab';

import './Tabs.css';

function mappedTabs(tabs: TabType[]) {
  return tabs.map((tab) => (
    <OsiTabs key={tab.id} id={tab.id} label={tab.label}>
      {tab.children &&
        tab.children.map((child) => {
          return (
            <OsiTab
              key={child.id}
              id={child.id}
              label={child.label}
              // isActive={child.isActive}
              // onClick={() =>
              //   tabsDispatch({
              //     type: TABS_ACTION_TYPES.TOGGLE_ACTIVE,
              //     payload: {id: child.id}
              //   })
              // }
            >
              {child.children && child.isActive && mappedTabs(child.children)}
            </OsiTab>
          );
        })}
    </OsiTabs>
  ));
}

export default function Tabs() {
  // const {tabs, tabsDispatch} = useGlobalContext();

  // useEffect(() => {
  //   tabsDispatch({type: TABS_ACTION_TYPES.TOGGLE_ACTIVE});
  // }, []);

  return <>{tabs.length > 0 && mappedTabs(tabs)}</>;
}
