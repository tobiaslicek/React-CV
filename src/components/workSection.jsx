import React from 'react';

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
              <span className="work-item-title">{experience.title}</span>
            </div>
          </li>
        );
      })}
    </section>
  );
};
