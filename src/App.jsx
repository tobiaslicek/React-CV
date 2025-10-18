import React from 'react';

import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import CvSection from './components/cvSection';

const jobs = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/906/906343.png',
    title: 'Frontend Developer – ABC s.r.o.',
    period: '2023 / 01 – 2025 / 03',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/906/906175.png',
    title: 'Web Designer – Freelance',
    period: '2021 / 05 – 2022 / 12',
  },
];

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
      React.createElement(
        CvSection,
        {
          title: 'Pracovní zkušenosti',
        },
        jobs.map((experience) => {
          return (
            <li className="work-item">
              <img
                src={experience.icon}
                className="work-item-icon"
                alt="Ikona pozice"
              />
              <div className="work-item-content">
                <span className="work-item-title">{experience.title}</span>
                <span className="work-item-period">{experience.period}</span>
              </div>
            </li>
          );
        })
      ),
      React.createElement(Footer),
    ]
  );
}

export default App;
