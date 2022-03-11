import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { AppLayout } from '../../components/app-layout';
import { ClientOnly } from '../../components/client-only';
import { CollectionManage } from '../../components/pages/collection-manage';
import { useProtectedRoute } from '../../hooks/useProtectedRoute';

type CollectionManagePageQueryType = {
  collectionId: string;
};

function isCollectionManagePageQueryType(
  query: ParsedUrlQuery,
): query is CollectionManagePageQueryType {
  console.log(query);
  return typeof query.collectionId === 'string';
}

const CollectionManagePage: React.FC = () => {
  const router = useRouter();
  const { loading } = useProtectedRoute();

  if (!router.query) throw new Error('Expected parameters, got none.');
  if (!isCollectionManagePageQueryType(router.query)) {
    console.error('oh no', router.query);
    return null;
  }

  return (
    <AppLayout title="Manage Collection" loading={loading}>
      <h1>Manage Collection</h1>
      <ClientOnly>
        <CollectionManage collectionId={router.query.collectionId} />
      </ClientOnly>
    </AppLayout>
  );
};

export default CollectionManagePage;
