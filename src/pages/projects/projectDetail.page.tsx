import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AppDataContext from '../../utils/context/appDataContext';

const ProjectDetailPage = () => {
  const { projectID } = useParams();

  const { appData } = useContext(AppDataContext);

  if (!appData || typeof appData != 'object') {
    return 'No project data found';
  }

  if (!appData.projects || typeof appData.projects != 'object') {
    return 'No project data found';
  }

  const currentProjectIndex = parseInt(projectID);
  const currentProject = appData.projects[currentProjectIndex];

  if (!currentProject) {
    return 'Project not found';
  }

  return <div>Project Detail Page: {currentProject.title}</div>;
};

export default ProjectDetailPage;
