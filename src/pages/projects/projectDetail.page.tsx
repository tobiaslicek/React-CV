import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AppDataContext from '../../utils/context/appDataContext';

const ProjectDetailPage = () => {
  const { projectID } = useParams<{ projectID: string }>();
  const { appData } = useContext(AppDataContext);

  if (!appData || !Array.isArray(appData.projects)) {
    return 'No project data found';
  }

  const id = Number(projectID);
  if (!Number.isFinite(id)) {
    return 'Invalid project id';
  }

  // Bezpečněji podle skutečného ID, ne indexu v poli
  const currentProject = appData.projects.find((p) => p.id === id);
  if (!currentProject) {
    return 'Project not found';
  }

  return <div>Project Detail Page: {currentProject.title}</div>;
};

export default ProjectDetailPage;
