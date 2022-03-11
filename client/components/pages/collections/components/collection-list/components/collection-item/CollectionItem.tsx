import Link from 'next/link';
import React from 'react';
import { CollectionListQuery } from '../../../../../../../@types/codegen/graphql';
import { Container } from './CollectionItem.styles';

type CollectionItemProps = React.DetailsHTMLAttributes<HTMLLIElement> & {
  collection: CollectionListQuery['allCollections'][0];
};

export const CollectionItem: React.FC<CollectionItemProps> = ({
  className,
  ...props
}) => {
  return (
    <Container className={className} {...props}>
      <Link href={`/collections/${props.collection.id}`} passHref>
        <a>
          {props.collection.name} ({props.collection._count.cards})
        </a>
      </Link>
    </Container>
  );
};
