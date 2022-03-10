import React from 'react';
import { useCollectionListLazyQuery } from '../../../@types/codegen/graphql';
import { AppLayout, AppLayoutProps } from '../../app-layout';
import { ClientOnly } from '../../client-only';
import { CollectionList } from './components/collection-list';

type CollectionsProps = AppLayoutProps;

export const Collections: React.FC<CollectionsProps> = (props) => {
  return (
    <AppLayout {...props}>
      <h1>Collections</h1>
      <ClientOnly>
        <CollectionList />
      </ClientOnly>
    </AppLayout>
  );
};
