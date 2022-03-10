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
  console.log(props.collection);
  return (
    <Container className={className} {...props}>
      {props.collection.name} ({props.collection._count.cards})
    </Container>
  );
};
