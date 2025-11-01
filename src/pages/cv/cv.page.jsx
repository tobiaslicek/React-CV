import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import ThemeContext from '../../utils/context/themeContext';
import AppDataContext from '../../utils/context/appDataContext';
import JobModalContent from '../../components/job/jobModalContent';
import Modal from '../../components/modal/modal';
import JobItem from '../../components/job/jobItem';
import SkillList from '../../components/skills/skillList';
import CvSection from '../../components/cvSection/cvSection';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

/**
 * Hlavní komponenta aplikace
 */
const CVPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { theme } = useContext(ThemeContext);

  const { appData } = useContext(AppDataContext);

  if (!appData) {
    return <div>No data available</div>;
  }

  const { personalInfo, jobs, metadata, links } = appData;

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
    <main
      className="cv"
      style={{
        background: theme === 'light' ? 'whitesmoke' : 'black',
      }}
    >
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
          <JobItem
            key={experience.title}
            title={experience.title}
            icon={experience.icon}
            period={experience.period}
            onClick={() => setSearchParams({ job: index.toString() })}
          />
        ))}
      </CvSection>

      <CvSection title="Dovednosti">
        <SkillList skills={metadata.skills} />
      </CvSection>

      <Footer links={links} />
    </main>
  );
};

export default CVPage;
