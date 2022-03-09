import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { client } from '../graphql/apollo-client';
import { BaseStyles } from '../styles/BaseStyles';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <BaseStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
