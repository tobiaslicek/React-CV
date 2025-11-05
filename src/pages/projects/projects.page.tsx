import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AppDataContext from '../../utils/context/appDataContext';

const ProjectsPage = () => {
  const { appData } = useContext(AppDataContext);

  if (!appData || !Array.isArray(appData.projects)) {
    return 'No project data found';
  }

  return (
    <main className="projects-page">
      <ul>
        {appData.projects.map((project) => (
          <li key={project.id}>
            <NavLink to={`/project/${project.id}`}>{project.title}</NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ProjectsPage;
