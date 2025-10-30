import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import CVRoute from './App.jsx';

import './index.css';
import ErrorBoundary from './components/errorBoundary.jsx';

const App = () => (
  <Routes>
    <Route path="/" element={<CVRoute />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="*" Component={() => <div>404 Not Found</div>} />
  </Routes>
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
