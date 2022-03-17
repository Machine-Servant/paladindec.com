import type { AppProps } from 'next/app';
import { ApolloProvider } from '../contexts/apollo-provider/ApolloProvider';
import { AuthContextProvider } from '../contexts/auth-context';
import { CollectionGridProvider } from '../contexts/collection-grid';
import { SidebarProvider } from '../contexts/sidebar-context';
import { BaseStyles } from '../styles/BaseStyles';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <ApolloProvider>
        <BaseStyles />
        <SidebarProvider>
          <CollectionGridProvider>
            <Component {...pageProps} />
          </CollectionGridProvider>
        </SidebarProvider>
      </ApolloProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
