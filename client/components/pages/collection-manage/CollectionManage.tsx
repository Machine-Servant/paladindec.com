import React, { useCallback, useEffect } from 'react';
import { useCollectionManageLazyQuery } from '../../../@types/codegen/graphql';
import { CollectionGrid } from './components/collection-grid';
import { QuickAdd } from './components/quick-add';

type CollectionManageProps = {
  collectionId: string;
};

export const CollectionManage: React.FC<CollectionManageProps> = (props) => {
  const [fetchCollection, { data, loading }] = useCollectionManageLazyQuery();

  const doFetch = useCallback(async () => {
    if (props.collectionId) {
      await fetchCollection({
        variables: { collectionId: props.collectionId },
      });
    }
  }, [fetchCollection, props.collectionId]);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  const handleAddComplete = useCallback(() => {
    doFetch();
  }, [doFetch]);

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;

  return (
    <div className="flex flex-col h-full">
      <div>{data?.collection.name}</div>
      <QuickAdd
        collection={data.collection}
        onAddComplete={handleAddComplete}
      />
      <CollectionGrid collection={data.collection} />
    </div>
  );
};
