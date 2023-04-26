import {createContext, useContext, useReducer} from 'react';

import initialState from '../states/tabState';
import tabsReducer, {TabsReducerAction} from '../reducers/tabsReducer';

type ContextType = {
  tabs: TabType[];
  tabsDispatch: React.Dispatch<TabsReducerAction>;
} | null;

export const TabsContext = createContext<ContextType>(null);

const TabsProvider = ({children}: React.PropsWithChildren) => {
  const [tabs, tabsDispatch] = useReducer(tabsReducer, initialState);
  return (
    <TabsContext.Provider value={{tabs, tabsDispatch}}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabsContext = () => {
  const value = useContext(TabsContext);

  if (value === null) {
    throw new Error('You need to wrap this component with <TabsProvider>');
  }

  return value;
};

export default TabsProvider;
