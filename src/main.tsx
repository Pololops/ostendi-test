import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import './styles/reset.css';
import './styles/index.css'
import TabsProvider from './context/tabsContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TabsProvider>
      <App />
    </TabsProvider>
  </React.StrictMode>,
)
