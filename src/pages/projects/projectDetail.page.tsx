import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AppDataContext from '../../utils/context/appDataContext';

const ProjectDetailPage = () => {
  const { projectID } = useParams();

  const { appData } = useContext(AppDataContext);

  if (typeof projects != 'object') {
    return 'No project data found';
  }

  const { projects } = appData;

  if (!projects || !Array.isArray(projects)) {
    return 'No project data found';
  }

  /* 

    const project = projects.find((p) => p.id === parseInt(projectID));

    if (!project) {
        return "Project not found";
    } */

  return <div>Project Detail Page: {projectID}</div>;
};

export default ProjectDetailPage;
