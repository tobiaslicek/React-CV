import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import CvSection from './components/cvSection/cvSection';
import ExperienceItem from './components/job/jobItem';
import SkillList from './components/skills/skillList';
import Modal from './components/modal/modal';
import JobModalContent from './components/job/jobModalContent';
import { useSearchParams, useNavigate } from 'react-router-dom';

import data from './data/profile.json';

/**
 * Seznam pracovních zkušeností
 */
const jobs = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/906/906343.png',
    title: 'Frontend Developer – ABC s.r.o.',
    period: '2023 / 01 – 2025 / 03',
    description:
      'Na této pozici jsem se podílel na vývoji webových aplikací a mobilních aplikací a kopal kanály a nasazoval jsem na ně víka.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Go',
      'Node.js',
      'PHP',
      'Git',
      'GitHub',
      'Gitlab',
      'VSCode',
    ],
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/906/906175.png',
    title: 'Web Designer – Freelance',
    period: '2021 / 05 – 2022 / 12',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Go',
      'Node.js',
      'PHP',
      'Git',
      'GitHub',
      'Gitlab',
      'VSCode',
    ],
  },
];

/**
 * Seznam dovedností
 */
const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Typescript',
  'React',
  'Go',
  'Node.js',
  'PHP',
  'Git',
  'GitHub',
  'Gitlab',
  'VSCode',
];

/**
 * Odkazy v patičce
 */
const links = [
  { label: 'GitHub', url: 'https://github.com/sjiamnocna' },
  { label: 'Gitlab', url: 'https://gitlab.com/sjiamnocna' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/sjiamnocna' },
  { label: 'Portfolio', url: 'https://jancsi.cz' },
];

/**
 * Hlavní komponenta aplikace
 */
const CVPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { personalInfo } = data;

  // Get job index from URL parameter
  const jobIndex = searchParams.get('job');
  const jobModalContentIndex = jobIndex ? parseInt(jobIndex, 10) : undefined;

  // Function to close modal by removing URL parameter
  const closeModal = () => {
    setSearchParams({});
  };

  const ModalContent = () => {
    if (
      jobModalContentIndex !== undefined &&
      jobModalContentIndex >= 0 &&
      jobModalContentIndex < jobs.length
    ) {
      // Get current job from jobs array
      const currentJob = jobs[jobModalContentIndex];

      // Create modal header
      const ModalHeader = () => (
        <ExperienceItem
          key={currentJob.title}
          title={currentJob.title}
          icon={currentJob.icon}
          period={currentJob.period}
          onClick={() =>
            setSearchParams({ job: jobModalContentIndex.toString() })
          }
        />
      );

      // Create modal content
      const ModalContent = () => (
        <JobModalContent
          skills={currentJob.skills}
          description={currentJob.description}
        />
      );

      // Return modal
      return (
        <Modal title={<ModalHeader />} onClose={closeModal}>
          <ModalContent />
        </Modal>
      );
    }
    return null;
  };

  return (
    <main className="cv">
      <ModalContent />
      <Header
        name={personalInfo.name}
        email={personalInfo.email}
        phone={personalInfo.phone}
        website={personalInfo.website}
        photoSrc={personalInfo.photoSrc}
      />

      <CvSection title="Pracovní zkušenosti">
        {jobs.map((experience, index) => (
          <ExperienceItem
            key={experience.title}
            title={experience.title}
            icon={experience.icon}
            period={experience.period}
            onClick={() => setSearchParams({ job: index.toString() })}
          />
        ))}
      </CvSection>

      <CvSection title="Dovednosti">
        <SkillList skills={skills} />
      </CvSection>

      <Footer links={links} />
    </main>
  );
};

export default CVPage;
