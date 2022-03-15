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
  return typeof query.collectionId === 'string';
}

const CollectionManagePage: React.FC = () => {
  const router = useRouter();
  const { loading } = useProtectedRoute();

  if (!router.query) throw new Error('Expected parameters, got none.');
  if (!isCollectionManagePageQueryType(router.query)) {
    return null;
  }

  return (
    <AppLayout title="Manage Collection" loading={loading}>
      <ClientOnly className="h-full">
        <CollectionManage collectionId={router.query.collectionId} />
      </ClientOnly>
    </AppLayout>
  );
};

export default CollectionManagePage;
