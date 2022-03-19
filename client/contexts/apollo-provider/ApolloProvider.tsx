import {
  ApolloClient,
  ApolloProvider as BaseApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client';
import React, { useMemo } from 'react';
import { GraphQLClient } from '../../graphql/graphql-client';
import { useAuth } from '../../hooks/useAuth';

type ApolloProivderContextType = {
  client: ApolloClient<NormalizedCacheObject>;
};

const ApolloContext = React.createContext<
  ApolloProivderContextType | undefined
>(undefined);

export const ApolloProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const { user } = useAuth();
  const client = useMemo(() => new GraphQLClient(user), [user]);

  return (
    <ApolloContext.Provider value={{ client: client.value }}>
      <BaseApolloProvider client={client.value}>{children}</BaseApolloProvider>;
    </ApolloContext.Provider>
  );
};
