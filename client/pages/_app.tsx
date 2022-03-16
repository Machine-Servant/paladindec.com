import type { AppProps } from 'next/app';
import { ApolloProvider } from '../contexts/apollo-provider/ApolloProvider';
import { AuthContextProvider } from '../contexts/auth-context';
import { BaseStyles } from '../styles/BaseStyles';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <ApolloProvider>
        <BaseStyles />
        <Component {...pageProps} />
      </ApolloProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
