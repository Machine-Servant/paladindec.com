import {
  ApolloClient,
  ApolloProvider as BaseApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React, { useMemo } from 'react';
import generatedIntrospection from '../../@types/codegen/fragments';
import { apolloConfig } from '../../config/apollo.config';
import { useAuth } from '../../hooks/useAuth';

export const ApolloProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const { user } = useAuth();

  const httpLink = useMemo(() => createHttpLink({ uri: apolloConfig.uri }), []);
  const authLink = useMemo(
    () =>
      setContext(async (_, { headers }) => {
        const token = await user?.getIdToken();
        return {
          headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ``,
          },
        };
      }),
    [user],
  );

  const client = useMemo(
    () =>
      new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache({
          possibleTypes: generatedIntrospection.possibleTypes,
        }),
      }),
    [authLink, httpLink],
  );

  return <BaseApolloProvider client={client}>{children}</BaseApolloProvider>;
};
