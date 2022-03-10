import React from 'react';
import { CollectionsAdd } from '../../components/pages/collections-add';
import { useProtectedRoute } from '../../hooks/useProtectedRoute';

const AddCollectionPage: React.FC = () => {
  const { loading } = useProtectedRoute();

  return <CollectionsAdd loading={loading} />;
};

export default AddCollectionPage;
