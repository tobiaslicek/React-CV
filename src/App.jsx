import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import CvSection from './components/sections/cvSection';
import ExperienceItem from './components/sections/experienceItem';
import SkillItem from './components/sections/skillItem';

const jobs = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/906/906343.png',
    title: 'Frontend Developer – VOATT',
    period: '2024 / 05 – 2025 / 10',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/906/906175.png',
    title: 'Frontend Developer – 7labs',
    period: '2024 / 02 – 2024 / 06',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/906/906175.png',
    title: 'Junior Fullstack Developer – Webmex s.r.o',
    period: '2024 / 02 – 2024 / 06',
  },
];

const skills = [
  'HTML, CSS, JavaScript',
  'React – základní pojmy (komponenty)',
  'Git, GitHub, VSCode',
];

const CVRoute = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

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
};

export default App;
