import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '../components/layout/Layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1 * 60 * 60 * 1000,
      staleTime: 1 * 60 * 60 * 1000,
    },
  },
});

function MyApp({ Component, ...pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="bottom-right"
        toastOptions={{
          fontSize: '1.4rem',
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>

    </QueryClientProvider>
  );
}

export default MyApp;
