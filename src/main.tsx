import React from 'react';
import ReactDOM from 'react-dom/client';
import {MemoryRouter} from 'react-router-dom';

import App from './components/App/App.tsx';
import TabsProvider from './contexts/globalContext.tsx';

import './styles/reset.css';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TabsProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </TabsProvider>
  </React.StrictMode>
);
