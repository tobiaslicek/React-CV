import React from 'react';

const SkillsSection = ({ title, skills }) => {
  return (
    <section className="cv-section">
      <h2>{title}</h2>
      <ul>
        {skills.map((skillData, i) => (
          <li key={i}>{skillData}</li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;
