import {Outlet, RouteObject, createMemoryRouter} from 'react-router';

import tabs from '../states/tabState';

import App from '../components/App/App';

const mappedRoutes = (tabs: TabType[]): RouteObject[] => {
  return tabs.map(({children}) => ({
    path: `:id`,
    element: <Outlet />,
    children: children?.map((child) => ({
      path: `:id`,
      children: child.children && mappedRoutes(child.children)
    }))
  }));
};

// const FAKE_EVENT = {name: 'test event'};
const routes = [
  {
    path: '/tabs_0',
    element: <App />,
    // loader: () => FAKE_EVENT,
    children: mappedRoutes(tabs)
  }
];

export const router = createMemoryRouter(routes, {
  initialEntries: [
    '/tabs_0',
    '/tabs_0/tab_1',
    '/tabs_0/tab_1/tabs_1/tab_1_1',
    '/tabs_0/tab_1/tabs_1/tab_1_1/tabs_1_1/tab_1_1_1',
    '/tabs_0/tab_2/tabs_2/tab_2_1'
  ],
  initialIndex: 0
});
