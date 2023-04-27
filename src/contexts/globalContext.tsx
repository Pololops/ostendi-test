import {createContext, useReducer} from 'react';

import initialTabsState from '../states/tabState';
import tabsReducer, {TabsReducerAction} from '../reducers/tabsReducer';

import initialRoutesState from '../states/routesState';
import routesReducer, {RoutesReducerAction} from '../reducers/routesReducer';

type ContextType = {
  tabs: TabType[];
  tabsDispatch: React.Dispatch<TabsReducerAction>;
  routes: string[];
  routesDispatch: React.Dispatch<RoutesReducerAction>;
} | null;

export const GlobalContext = createContext<ContextType>(null);

const GlobalProvider = ({children}: React.PropsWithChildren) => {
  const [tabs, tabsDispatch] = useReducer(tabsReducer, initialTabsState);
  const [routes, routesDispatch] = useReducer(routesReducer, initialRoutesState);

  return (
    <GlobalContext.Provider value={{tabs, tabsDispatch, routes, routesDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
