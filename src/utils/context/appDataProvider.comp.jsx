import { useQuery } from '@tanstack/react-query';
import AppDataContext from './appDataContext';

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

const AppDataProvider = ({ children }) => {
  const {
    data: appData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['cvData'],
    queryFn: loadData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <AppDataContext.Provider value={{ appData }}>
      {children}
    </AppDataContext.Provider>
  );
};

export default AppDataProvider;
