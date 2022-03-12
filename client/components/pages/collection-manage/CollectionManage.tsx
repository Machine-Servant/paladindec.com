import React, { useEffect } from 'react';
import { useCollectionManageLazyQuery } from '../../../@types/codegen/graphql';
import { CollectionGrid } from './components/collection-grid';

type CollectionManageProps = {
  collectionId: string;
};

export const CollectionManage: React.FC<CollectionManageProps> = (props) => {
  const [fetchCollection, { data, loading }] = useCollectionManageLazyQuery();

  useEffect(() => {
    const doFetch = async () => {
      if (props.collectionId) {
        await fetchCollection({
          variables: { collectionId: props.collectionId, take: 100, skip: 0 },
        });
      }
    };
    doFetch();
  }, [props.collectionId, fetchCollection]);

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;

  return (
    <div className="flex flex-col h-full">
      <div>{data?.collection.name}</div>
      <CollectionGrid cardsInCollection={data.collection.cards} />
    </div>
  );
};
