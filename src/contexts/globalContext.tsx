import {createContext, useReducer} from 'react';

import initialTabsState from '../states/tabState';
import tabsReducer, {TabsReducerAction} from '../reducers/tabsReducer';

type ContextType = {
  tabs: TabType[];
  tabsDispatch: React.Dispatch<TabsReducerAction>;
} | null;

export const GlobalContext = createContext<ContextType>(null);

const GlobalProvider = ({children}: React.PropsWithChildren) => {
  const [tabs, tabsDispatch] = useReducer(tabsReducer, initialTabsState);

  return (
    <GlobalContext.Provider value={{tabs, tabsDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
