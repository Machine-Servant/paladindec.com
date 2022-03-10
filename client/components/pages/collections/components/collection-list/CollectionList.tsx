import Link from 'next/link';
import React, { useEffect } from 'react';
import { useCollectionListLazyQuery } from '../../../../../@types/codegen/graphql';
import { Container, List } from './CollectionList.styles';
import { CollectionItem } from './components/collection-item';

type CollectionListProps = React.DetailsHTMLAttributes<HTMLDivElement>;

export const CollectionList: React.FC<CollectionListProps> = ({
  className,
  ...props
}) => {
  const [fetchCollections, { data, loading }] = useCollectionListLazyQuery();

  useEffect(() => {
    const doFetch = async () => {
      await fetchCollections();
    };
    doFetch();
  }, [fetchCollections]);

  if (loading) return <div>Loading...</div>;

  console.log(data);

  return (
    <Container className={className} {...props}>
      <List>
        {data?.allCollections.map((collection) => (
          <CollectionItem key={collection.id} collection={collection} />
        ))}
      </List>
      {data?.allCollections.length === 0 && <div>No Collections, yet...</div>}
      <Link href="/collections/add">Add Collection</Link>
    </Container>
  );
};
