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
// import { TOKEN_COOKIE_NAME } from '../contexts/auth-context';
import { Logger } from '../utils/logger';

const TOKEN_COOKIE_NAME = 'paladindeck_token';

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
    const httpLink = createHttpLink({ uri: apolloConfig.uri });
    const authLink = setContext(async (_, context) => {
      // this.logger.debug('authLink running with context', context);

      // this.logger.debug('cookie is', context?.headers?.cookie);

      let token: string | undefined;
      if (context?.headers?.cookie) {
        try {
          const parts = context.headers.cookie.split(';');
          // this.logger.debug(`token cookie name`, TOKEN_COOKIE_NAME);
          // this.logger.debug(`parts`, parts);
          const found = parts.find((x: string) =>
            x.trim().startsWith(TOKEN_COOKIE_NAME),
          );
          // this.logger.debug(`found`, found);

          token = found.split(`${TOKEN_COOKIE_NAME}=`).pop();

          // this.logger.debug('Found token', token);
        } catch (err) {
          // this.logger.error(
          //   `OH NO! WHAT THE FUCK HAPPENED?`,
          //   context.headers.cookie,
          // );
          this.logger.error(err);
        }
      } else {
        token = await this.user?.getIdToken();
      }

      const headers = {
        ...context.headers,
        authorization: token ? `Bearer ${token}` : ``,
      };

      // this.logger.info(`headers are`, headers);

      return { headers };
    });
    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache({
        possibleTypes: generatedIntrospection.possibleTypes,
      }),
      ssrMode: typeof window === 'undefined',
    });
  }
}
