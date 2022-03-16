import type { AppProps } from 'next/app';
import { CollectionGridProvider } from '../components/pages/collection-manage/components/collection-grid/CollectionGrid.context';
import { ApolloProvider } from '../contexts/apollo-provider/ApolloProvider';
import { AuthContextProvider } from '../contexts/auth-context';
import { BaseStyles } from '../styles/BaseStyles';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <ApolloProvider>
        <BaseStyles />
        <CollectionGridProvider>
          <Component {...pageProps} />
        </CollectionGridProvider>
      </ApolloProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
