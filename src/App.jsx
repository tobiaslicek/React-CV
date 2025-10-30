import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import CvSection from './components/cvSection/cvSection';
import ExperienceItem from './components/job/jobItem';
import SkillList from './components/skills/skillList';
import Modal from './components/modal/modal';
import JobModalContent from './components/job/jobModalContent';
import { useSearchParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

const loadData = async () => {
  const personalInfo = await fetch('http://localhost:3002/personalInfo').then(
    (response) => response.json()
  );
  const jobs = await fetch('http://localhost:3002/jobs').then((response) =>
    response.json()
  );
  const metadata = await fetch('http://localhost:3002/metadata').then(
    (response) => response.json()
  );
  const links = await fetch('http://localhost:3002/links').then((response) =>
    response.json()
  );

  return { personalInfo, jobs, metadata, links };
};

/**
 * Hlavní komponenta aplikace
 */
const CVPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['cvData'],
    queryFn: loadData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const { personalInfo, jobs, metadata, links } = data;

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
        <SkillList skills={metadata.skills} />
      </CvSection>

      <Footer links={links} />
    </main>
  );
};

export default CVPage;
