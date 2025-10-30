import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import ErrorBoundary from './components/errorBoundary.jsx';
import CVPage from './App.jsx';
import ProfilePage from './pages/profile/profile.page.jsx';

import './index.css';

const App = () => (
  <Routes>
    <Route path="/" element={<CVPage />} />
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
