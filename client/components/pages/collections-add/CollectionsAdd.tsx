import React from 'react';
import {
  CollectionCreateWithoutUserInput,
  useAddCollectionMutation,
} from '../../../@types/codegen/graphql';
import { AppLayout, AppLayoutProps } from '../../app-layout';
import { ClientOnly } from '../../client-only';
import { CollectionsAddForm } from './components/collections-add-form';

type CollectionsManageProps = AppLayoutProps;

export const CollectionsAdd: React.FC<CollectionsManageProps> = ({
  className,
  loading,
  ...props
}) => {
  const [addCollection, { loading: addLoading }] = useAddCollectionMutation();

  const handleAddCollection = async (
    input: CollectionCreateWithoutUserInput,
  ) => {
    const results = await addCollection({ variables: { input } });
    console.log('added', results.data?.addCollection.id);
  };

  return (
    <AppLayout className={className} loading={loading || addLoading} {...props}>
      <h1>Add a collection</h1>
      <ClientOnly>
        <CollectionsAddForm onSubmit={handleAddCollection} />
      </ClientOnly>
    </AppLayout>
  );
};
