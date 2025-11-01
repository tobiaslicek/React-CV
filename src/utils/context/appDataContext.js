import { createContext } from 'react';

/**
 * Context with app data fetched from API
 */
const AppDataContext = createContext({
  appData: null,
  setAppData: () => {},
});

export default AppDataContext;
