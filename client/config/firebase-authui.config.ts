import { gql } from '@apollo/client';
import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Props } from 'react-firebaseui';
import { GraphQLClient } from '../graphql/graphql-client';
import { Logger } from '../utils/logger';

const GET_OR_CREATE_USER_MUTATION = gql`
  mutation GetOrCreateUser($input: UserCreateWithoutCollectionsInput!) {
    user: getOrCreateUser(input: $input) {
      id
    }
  }
`;

export class FirebaseAuthUiConfig {
  private readonly logger = new Logger(FirebaseAuthUiConfig.name);

  get config(): Props['uiConfig'] {
    return {
      signInFlow: 'popup',
      signInSuccessUrl: '/user-home',
      tosUrl: '/terms-of-service',
      privacyPolicyUrl: '/privacy-policy',
      signInOptions: [
        EmailAuthProvider.PROVIDER_ID,
        GoogleAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccessWithAuthResult: (authResults) => {
          this.logger.debug(`AuthResults`, authResults);
          const client = new GraphQLClient(authResults.user);
          const doGetOrCreateUser = async () => {
            try {
              await client.value.mutate({
                mutation: GET_OR_CREATE_USER_MUTATION,
                variables: {
                  input: {
                    externalAuthId: authResults.user.uid,
                    email: authResults.user.email,
                  },
                },
              });
            } catch (err) {
              this.logger.error(JSON.stringify(err, null, 2));
            }
          };
          doGetOrCreateUser();
          return true;
        },
      },
    };
  }
}
