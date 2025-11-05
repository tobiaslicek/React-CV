import { Route, Routes } from 'react-router-dom';
import CVPage from './pages/cv/cv.page';
import ProfilePage from './pages/profile/profile.page';

import './index.css'
import './App.css'
import ProjectsPage from './pages/projects/projects.page';

const App = () => {
  return <Routes>
    <Route path="/" element={<CVPage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path='/projects' element={<ProjectsPage />} />
    <Route path='/project/:projectID' element={} />
    <Route path="*" Component={() => <div>404 Not Found</div>} />
  </Routes>
}

export default App;