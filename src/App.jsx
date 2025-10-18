import React from 'react';

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/header';

function App() {
  return React.createElement(
    'main',
    {
      className: 'cv',
    },
    [
      React.createElement(Header, {
        key: 'header',
        name: 'Jan Novák',
        email: 'jan.novak@example.com',
        phone: '+420 777 888 999',
        website: 'www.jannovak.cz',
        photoSrc: 'https://via.placeholder.com/120x120.png?text=Profil',
      }),
    ]
  );
}

export default App;
