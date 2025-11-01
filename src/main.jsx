import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ThemeContextProvider from './utils/context/themeProvider.comp.jsx';

import ErrorBoundary from './components/errorBoundary.jsx';
import CVPage from './App.jsx';
import ProfilePage from './pages/profile/profile.page.jsx';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppDataProvider from './utils/context/appDataProvider.comp.jsx';

import './index.css';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <AppDataProvider>
          <Routes>
            <Route path="/" element={<CVPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" Component={() => <div>404 Not Found</div>} />
          </Routes>
        </AppDataProvider>
      </QueryClientProvider>
    </ThemeContextProvider>
  );
};

/**
 * Hlavní vstupní bod aplikace, spouštíme React ekosystém a výstup vložíme do elementu s ID "root"
 */
const root = document.getElementById('root');
createRoot(root).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);

export default App;
