import React from 'react';
import ReactDOM from 'react-dom/client';
import {MemoryRouter} from 'react-router-dom';

import './styles/reset.css';
import './styles/index.css';
import App from './components/App/App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MemoryRouter initialEntries={['/tabs_0']} initialIndex={0}>
      <App />
    </MemoryRouter>
  </React.StrictMode>
);
