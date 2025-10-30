import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Router } from 'react-router-dom';

import CVRoute from './App.jsx';

import './index.css';
import ErrorBoundary from './components/errorBoundary.jsx';

const App = () => (
  <Router>
    <Route path="/" element={<CVRoute />} />
  </Router>
);

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
