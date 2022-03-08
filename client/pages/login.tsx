import { useRouter } from 'next/router';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth } from '../app/firebase.app';
import { BasicLayout } from '../components/basic-layout';
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
    router.push('/user-home');
  }

  return (
    <BasicLayout title="login">
      <div className="absolute flex items-center justify-center w-screen h-screen from-blue-500 to-blue-50 bg-gradient-to-b">
        <div className="rounded-lg shadow-lg sm:p-8 bg-white-50 shadow-black-800">
          <StyledFirebaseAuth
            uiConfig={firebaseAuthUIConfig}
            firebaseAuth={auth}
          />
        </div>
      </div>
    </BasicLayout>
  );
};

export default Login;
