import React from 'react';
import { auth } from '../app/firebase.app';
import { ClientOnly } from '../components/client-only';
import { UserHome } from '../components/pages/user-home';
import { useProtectedRoute } from '../hooks/useProtectedRoute';

const UserHomePage: React.FC = () => {
  const { loading } = useProtectedRoute();

  return <UserHome loading={loading} />;
};

export default UserHomePage;
