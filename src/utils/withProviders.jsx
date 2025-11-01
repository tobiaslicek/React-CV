import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import AppDataProvider from './context/appDataProvider.comp';
import ThemeProvider from './context/themeProvider.comp';

const WithProviders = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <AppDataProvider>{children}</AppDataProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default WithProviders;
