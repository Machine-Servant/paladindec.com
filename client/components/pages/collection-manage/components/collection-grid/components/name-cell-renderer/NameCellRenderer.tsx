import Link from 'next/link';
import React from 'react';

export const NameCellRenderer = (props: {
  value: { name: string; id: string; collectionId: string };
}) => {
  return (
    <Link href={`/collections/${props.value.collectionId}/${props.value.id}`}>
      {props.value.name}
    </Link>
  );
};
