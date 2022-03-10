import React from 'react';
import { Collections } from '../../components/pages/collections';
import { useProtectedRoute } from '../../hooks/useProtectedRoute';

const CollectionsPage: React.FC = () => {
  const { loading } = useProtectedRoute();

  return <Collections loading={loading} />;
};

export default CollectionsPage;
