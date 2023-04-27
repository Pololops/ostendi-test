import { useContext } from 'react';
import { GlobalContext } from '../contexts/globalContext';

export const useGlobalContext = () => {
  const value = useContext(GlobalContext);

  if (value === null) {
    throw new Error('You need to wrap this component with <TabsProvider>');
  }

  return value;
};