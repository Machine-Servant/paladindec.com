import Image from 'next/image';
import React from 'react';
import { Card, ScryfallCard } from '../../@types/codegen/graphql';
import { Container } from './ImageHover.styles';

type ImageHoverProps = {
  className?: string;
  card?: Pick<Card, 'name'> & {
    scryfallCard: Pick<ScryfallCard, 'imageUris'>;
  };
};

interface ImageUris {
  normal: string;
}

function isImageUris(obj: unknown): obj is ImageUris {
  return !!(obj as ImageUris).normal;
}

export const ImageHover: React.FC<ImageHoverProps> = (props) => {
  if (!props.card?.scryfallCard) return null;
  if (!props.card?.name) return null;
  if (!isImageUris(props.card?.scryfallCard?.imageUris)) return null;

  return (
    <Container className={props.className}>
      <div className="relative w-full h-full">
        <Image
          src={props.card.scryfallCard.imageUris.normal}
          layout="fill"
          objectFit="contain"
          alt={props.card.name}
        />
      </div>
    </Container>
  );
};
