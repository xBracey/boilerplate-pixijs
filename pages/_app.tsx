import './globals.css';
import { StrictMode } from 'react';
import { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat'; // load on demand

dayjs.extend(advancedFormat); // use plugin

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
                <Toaster />
                <ReactQueryDevtools initialIsOpen={false} position="top-right" />
            </QueryClientProvider>
        </StrictMode>
    );
};

export default MyApp;
