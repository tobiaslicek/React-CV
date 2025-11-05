import { useContext } from 'react';
import AppDataContext from '../../utils/context/appDataContext';
import { NavLink } from 'react-router-dom';

const ProjectsPage = () => {
  const { appData } = useContext(AppDataContext);

  if (!appData || typeof appData != 'object') {
    return 'No project data found';
  }

  if (!appData.projects || typeof appData.projects != 'object') {
    return 'No project data found';
  }

  /**
     * {
            "id": 1,
            "title": "Todo App",
            "img": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80&auto=format&fit=crop",
            "tags": ["React", "Vite", "CSS"],
            "description": "Jednoduchá aplikace pro správu úkolů s ukládáním do localStorage.",
            "url": "#"
        },
     */

  return (
    <main className="projects-page">
      {appData.projects.map((project) => (
        <NavLink to={`/project/${project.id}`}>
          <li>{project.title}</li>
        </NavLink>
      ))}
    </main>
  );
};

export default ProjectsPage;
