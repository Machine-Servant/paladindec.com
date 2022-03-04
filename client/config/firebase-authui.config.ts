import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Props } from 'react-firebaseui';

export const firebaseAuthUIConfig: Props['uiConfig'] = {
  signInFlow: 'popup',
  signInSuccessUrl: '/protected',
  tosUrl: '/terms-of-service',
  privacyPolicyUrl: '/privacy-policy',
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID,
    GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: (authResults, redirectUrl) => {
      console.log(authResults, redirectUrl);
      return true;
    },
  },
};
