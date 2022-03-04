import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth } from '../app/firebase.app';
import { firebaseAuthUIConfig } from '../config/firebase-authui.config';

const Login: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  if (loading) return <text>Loading</text>;

  if (error) {
    console.log(error);
    return (
      <text>
        {error.name} {error.message}
      </text>
    );
  }

  if (user) {
    router.push('/');
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div>
        <StyledFirebaseAuth
          uiConfig={firebaseAuthUIConfig}
          firebaseAuth={auth}
        />
      </div>
    </>
  );
};

export default Login;
