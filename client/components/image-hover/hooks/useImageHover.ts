import { useCallback, useState } from 'react';
import { Card, ScryfallCard } from '../../../@types/codegen/graphql';

type ImageHoverCard = Pick<Card, 'name'> & {
  scryfallCard: Pick<ScryfallCard, 'imageUris'>;
};

export const useImageHover = () => {
  const [card, setCard] = useState<ImageHoverCard>();

  const handleMouseEnter = useCallback((card: ImageHoverCard) => {
    setCard(card);
  }, []);

  const hideHover = useCallback(() => {
    setCard(undefined);
  }, []);

  const handleMouseLeave = useCallback(() => {
    hideHover();
  }, [hideHover]);

  return {
    handleMouseEnter,
    handleMouseLeave,
    hideHover,
    card,
  };
};
