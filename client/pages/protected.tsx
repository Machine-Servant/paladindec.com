import React from 'react';
import { auth } from '../app/firebase.app';
import { AppLayout } from '../components/app-layout';
import { useProtectedRoute } from '../hooks/useProtectedRoute';

const Protected: React.FC = () => {
  const { loading } = useProtectedRoute();

  const handleSignout = async () => {
    await auth.signOut();
  };

  return (
    <AppLayout title="Protected" loading={loading}>
      <h1 className="text-green-500">Protected Page</h1>
      <button onClick={handleSignout}>Sign Out</button>
    </AppLayout>
  );
};

export default Protected;
