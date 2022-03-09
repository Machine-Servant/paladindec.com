import React from 'react';
import { auth } from '../app/firebase.app';
import { ClientOnly } from '../components/client-only';
import { UserHome } from '../components/pages/user-home';
import { useProtectedRoute } from '../hooks/useProtectedRoute';

const UserHomePage: React.FC = () => {
  const { loading } = useProtectedRoute();

  const handleSignout = async () => {
    await auth.signOut();
  };

  return <UserHome loading={loading} onSignout={handleSignout} />;
};

export default UserHomePage;
