import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CvSection from './components/CvSection';
import ExperienceItem from './components/ExperienceItem';
import SkillItem from './components/SkillItem';

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

const skills = [
  'HTML, CSS, JavaScript',
  'React – základní pojmy (komponenty)',
  'Git, GitHub, VSCode',
];

function App() {
  return (
    <main className="cv">
      <Header
        name="Tobiáš Licek"
        contacts="📧 tobiaslicek@seznam.cz | ☎️ +420 732 633 936 | 🌐 www.tobiaslicek.cz"
      />

      <CvSection title="Pracovní zkušenosti">
        {jobs.map((experience, index) => (
          <ExperienceItem
            key={index}
            title={experience.title}
            icon={experience.icon}
            period={experience.period}
          />
        ))}
      </CvSection>

      <CvSection title="Dovednosti">
        {skills.map((skill, index) => (
          <SkillItem key={index} title={skill} />
        ))}
      </CvSection>

      <Footer />
    </main>
  );
}

export default App;
