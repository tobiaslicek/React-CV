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
 * Hlavní komponenta aplikace
 */
const CVPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { personalInfo, jobs, skills, links } = data;

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
