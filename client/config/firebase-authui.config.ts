import { gql } from '@apollo/client';
import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Props } from 'react-firebaseui';
import { client } from '../graphql/apollo-client';

const GET_OR_CREATE_USER_MUTATION = gql`
  mutation GetOrCreateUser($input: UserCreateWithoutCollectionsInput!) {
    user: getOrCreateUser(input: $input) {
      id
    }
  }
`;

export const firebaseAuthUIConfig: Props['uiConfig'] = {
  signInFlow: 'popup',
  signInSuccessUrl: '/user-home',
  tosUrl: '/terms-of-service',
  privacyPolicyUrl: '/privacy-policy',
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID,
    GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: (authResults, redirectUrl) => {
      console.log(JSON.stringify(authResults, null, 2));
      const doGetOrCreateUser = async () => {
        try {
          await client.mutate({
            mutation: GET_OR_CREATE_USER_MUTATION,
            variables: {
              input: {
                externalAuthId: authResults.user.uid,
                email: authResults.user.email,
              },
            },
          });
        } catch (err) {
          console.error(JSON.stringify(err, null, 2));
        }
      };
      doGetOrCreateUser();
      return true;
    },
  },
};
