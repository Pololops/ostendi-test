import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';

import TabsProvider from './contexts/globalContext.tsx';

import {router} from './router/router.tsx';

import './styles/reset.css';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TabsProvider>
      <RouterProvider router={router} />
    </TabsProvider>
  </React.StrictMode>
);
