import { AgGridReact } from '@ag-grid-community/react';
import React, { useCallback, useEffect, useRef } from 'react';
import { useCollectionManageLazyQuery } from '../../../@types/codegen/graphql';
import { CollectionGrid } from './components/collection-grid';
import { QuickAdd } from './components/quick-add';
import { QuickAddProvider } from './components/quick-add/QuickAdd.context';

type CollectionManageProps = {
  collectionId: string;
};

export const CollectionManage: React.FC<CollectionManageProps> = (props) => {
  const [fetchCollection, { data, loading }] = useCollectionManageLazyQuery();
  const ref = React.createRef<AgGridReact>();

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

  const handleCardAddedToCollection = useCallback(() => {
    console.log('card added to collection');
    if (!ref.current) return;
    ref.current.api.refreshServerSideStore({ route: [], purge: false });
  }, [ref]);

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;

  return (
    <QuickAddProvider
      collection={data.collection}
      onCardAddedToCollection={handleCardAddedToCollection}
    >
      <div className="flex flex-col h-full">
        <div>{data?.collection.name}</div>
        <QuickAdd />
        <CollectionGrid ref={ref} collection={data.collection} />
      </div>
    </QuickAddProvider>
  );
};
