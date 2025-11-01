import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import ErrorBoundary from './components/errorBoundary.jsx';
import App from './App.jsx';
import WithProviders from './utils/withProviders.jsx';

/**
 * Hlavní vstupní bod aplikace, spouštíme React ekosystém a výstup vložíme do elementu s ID "root"
 */
const root = document.getElementById('root');
createRoot(root).render(
  <StrictMode>
    <ErrorBoundary>
      <WithProviders>
        <App />
      </WithProviders>
    </ErrorBoundary>
  </StrictMode>
);

export default App;
