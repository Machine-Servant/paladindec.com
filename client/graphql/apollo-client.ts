import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { apolloConfig } from '../config/apollo.config';

const httpLink = createHttpLink({
  uri: apolloConfig.uri,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('paladindeck:token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
