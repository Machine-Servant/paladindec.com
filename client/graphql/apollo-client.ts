import { ApolloClient, InMemoryCache } from '@apollo/client';
import generatedIntrospection from '../@types/codegen/fragments';

export const client = new ApolloClient({
  cache: new InMemoryCache({
    possibleTypes: generatedIntrospection.possibleTypes,
  }),
});
