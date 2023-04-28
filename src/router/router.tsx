import {createMemoryRouter} from 'react-router';

import tabs from '../states/tabState';

import App from '../components/App/App';
import OsiTabs from '../components/OsiTabs/OsiTabs';
import OsiTab from '../components/OsiTab/OsiTab';

type RouteType = {
  path: string;
  element: JSX.Element;
  children?: RouteType[];
};

const mappedRoutes = (tabs: TabType[]): RouteType[] => {
  return tabs.map((tab) => ({
    path: tab.id,
    element: (
      <OsiTabs key={tab.id} id={tab.id} label={tab.label}/>    
    ),
    children: tab.children?.map((child) => ({
      path: child.id,
      element: (
        <OsiTab key={child.id} id={child.id} label={child.label}/>
      ),
      children: child.children && mappedRoutes(child.children)
    }))
  }));
};

console.log(mappedRoutes(tabs));

const routes = [
  {
    path: '/',
    element: <App />,
    children: mappedRoutes(tabs)
  }
];

export const router = createMemoryRouter(routes, {
  initialEntries: [
    '/',
    '/tabs_0',
    '/tabs_0/tab_1',
    '/tabs_0/tab_1/tabs_1/tab_1_1',
    '/tabs_0/tab_1/tabs_1/tab_1_1/tabs_1_1/tab_1_1_1',
  ],
  initialIndex: 4
});
