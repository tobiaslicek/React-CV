import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Router } from 'react-router-dom'

import CVRoute from './App.jsx'

import './index.css'

const App = () => <Router>
  <Route
</Router>

const root = document.getElementById('root');
createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);