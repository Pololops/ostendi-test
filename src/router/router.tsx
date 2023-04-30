import {createMemoryRouter} from 'react-router';

import App from '../components/App/App';

// const FAKE_EVENT = {name: 'test event'};
const routes = [
  {
    path: '*',
    element: <App />,
    // loader: () => FAKE_EVENT,
  }
];

export const router = createMemoryRouter(routes, {
  initialEntries: ['/tabs_0'],
  initialIndex: 0
});
