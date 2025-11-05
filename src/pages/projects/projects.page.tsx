import { useContext } from 'react';
import AppDataContext from '../../utils/context/appDataContext';

const ProjectsPage = () => {
  const { appData } = useContext(AppDataContext);

  if (typeof projects != 'object') {
    return 'No project data found';
  }
  const { projects } = appData;

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
      {projects.map((project) => (
        <li>{project.title}</li>
      ))}
    </main>
  );
};

export default ProjectsPage;
