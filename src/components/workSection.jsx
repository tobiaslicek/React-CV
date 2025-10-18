import React from 'react';

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

const WorkSection = () => {
  return (
    <section className="cv-section">
      <h2>💼 Pracovní zkušenosti</h2>
      {jobs.map((experience) => {
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
      })}
    </section>
  );
};

export default WorkSection;
