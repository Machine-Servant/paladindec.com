import { AgGridReact } from '@ag-grid-community/react';
import React, { useCallback, useEffect, useMemo } from 'react';
import {
  useCollectionGridDeleteCardFromCollectionMutation,
  useCollectionManageLazyQuery,
  useCollectionManageUpdateCardInCollectionMutation,
} from '../../../@types/codegen/graphql';
import { CardInCollection, CollectionGrid } from './components/collection-grid';
import { QuickAdd } from './components/quick-add';
import { QuickAddProvider } from './components/quick-add/QuickAdd.context';

type CollectionManageProps = {
  collectionId: string;
};

export const CollectionManage: React.FC<CollectionManageProps> = (props) => {
  const [fetchCollection, { data, loading }] = useCollectionManageLazyQuery();
  const [deleteCardFromCollection] =
    useCollectionGridDeleteCardFromCollectionMutation();
  const [updateCardInCollection] =
    useCollectionManageUpdateCardInCollectionMutation();

  // I'm sure this is somehow "wrong", but it's the only damn way I was able to
  // figure out how to prevent the `ref.current` reference from disappearing
  // after an async/await operation.
  //
  // Potentially this is because useMemo automates updating the value whereas
  // `React.createRef` does not?
  //
  // Maybe this is an edge case because we're forwarding the ref and have to use
  // `React.createRef` instead of `useRef`?
  //
  // @see: https://thoughtspile.github.io/2021/04/05/useref-usememo/
  // @see: https://stackoverflow.com/questions/60295824/react-createref-inside-usememo
  const ref = useMemo(() => React.createRef<AgGridReact>(), []);

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
    ref.current?.api.refreshServerSideStore({ route: [], purge: false });
  }, [ref]);

  const handleDeleteCardFromCollection = useCallback(
    async (cardInCollection: CardInCollection) => {
      if (!data?.collection) return;
      await deleteCardFromCollection({
        variables: {
          cardId: cardInCollection.card.id,
          collectionId: data.collection.id,
          isFoil: cardInCollection.isFoil,
          isEtched: cardInCollection.isEtched,
        },
      });
      ref.current?.api.refreshServerSideStore();
    },
    [ref, deleteCardFromCollection, data?.collection],
  );

  const handleUpdateCardCount = useCallback(
    async (
      params: {
        cardId: string;
        collectionId: string;
        isEtched: boolean;
        isFoil: boolean;
      },
      count: number,
    ) => {
      if (!data?.collection) return;
      await updateCardInCollection({
        variables: {
          input: {
            cardId: { set: params.cardId },
            collectionId: { set: params.collectionId },
            isFoil: { set: params.isFoil },
            isEtched: { set: params.isEtched },
            count: { set: count },
          },
        },
      });
    },
    [data?.collection, updateCardInCollection],
  );

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
        <CollectionGrid
          ref={ref}
          collection={data.collection}
          onDeleteCardFromCollection={handleDeleteCardFromCollection}
          onUpdateCardCount={handleUpdateCardCount}
        />
      </div>
    </QuickAddProvider>
  );
};
