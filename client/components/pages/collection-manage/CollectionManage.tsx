import React, { useEffect } from 'react';
import { useCollectionManageLazyQuery } from '../../../@types/codegen/graphql';

type CollectionManageProps = {
  collectionId: string;
};

export const CollectionManage: React.FC<CollectionManageProps> = (props) => {
  const [fetchCollection, { data, loading }] = useCollectionManageLazyQuery();

  useEffect(() => {
    const doFetch = async () => {
      if (props.collectionId) {
        await fetchCollection({
          variables: { collectionId: props.collectionId },
        });
      }
    };
    doFetch();
  }, [props.collectionId, fetchCollection]);

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;

  return <div>{data?.collection.name}</div>;
};
