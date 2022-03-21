import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { User } from 'firebase/auth';
import generatedIntrospection from '../@types/codegen/fragments';
import { apolloConfig } from '../config/apollo.config';
import { TOKEN_COOKIE_NAME } from '../contexts/auth-context';
import { getCookie } from '../utils/getCookie';
import { Logger } from '../utils/logger';

export class GraphQLClient {
  private readonly logger = new Logger(GraphQLClient.name);

  get value(): ApolloClient<NormalizedCacheObject> {
    if (!this._client) {
      this._client = this.createClient();
    }
    if (this._client === undefined)
      throw new Error(`Error when creating graphql client`);
    return this._client;
  }

  constructor(
    private readonly user?: User | null,
    private _client?: ApolloClient<NormalizedCacheObject>,
  ) {}

  private createClient(): ApolloClient<NormalizedCacheObject> {
    const isSsrMode = typeof window === 'undefined';
    const httpLink = createHttpLink({ uri: apolloConfig.uri });
    const authLink = setContext(async (_, context) => {
      let token: string | undefined;
      if (context?.headers?.cookie) {
        try {
          token = getCookie(TOKEN_COOKIE_NAME, context.headers.cookie);
        } catch (err) {
          this.logger.error(err);
          token = await this.user?.getIdToken();
        }
      } else {
        token = await this.user?.getIdToken();
      }

      const headers = {
        ...(!isSsrMode ? context.headers : []),
        authorization: token ? `Bearer ${token}` : ``,
      };

      return { headers };
    });

    return new ApolloClient({
      link: authLink.concat(httpLink),
      credentials: 'include',
      cache: new InMemoryCache({
        possibleTypes: generatedIntrospection.possibleTypes,
      }),
      ssrMode: isSsrMode,
    });
  }
}
