import { useContext } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import AppDataContext from '../../utils/context/appDataContext';

const ProjectDetailPage = () => {
  const { projectID } = useParams<{ projectID: string }>();
  const { appData } = useContext(AppDataContext);

  if (!appData || !Array.isArray(appData.projects))
    return 'No project data found';

  const id = Number(projectID);
  if (!Number.isFinite(id)) return 'Invalid project id';

  const currentProject = appData.projects.find((p) => p.id === id);
  if (!currentProject) return 'Project not found';

  return (
    <main className="project-detail">
      <p>
        <NavLink to="/projects">← Zpět na seznam</NavLink>
      </p>
      <h1>{currentProject.title}</h1>
      {currentProject.img && (
        <img src={currentProject.img} alt={currentProject.title} />
      )}
      {currentProject.tags?.length ? (
        <p>{currentProject.tags.join(' · ')}</p>
      ) : null}
      {currentProject.description && <p>{currentProject.description}</p>}
      {currentProject.url && currentProject.url !== '#' && (
        <p>
          <a href={currentProject.url} target="_blank" rel="noreferrer">
            Otevřít projekt
          </a>
        </p>
      )}
    </main>
  );
};

export default ProjectDetailPage;
