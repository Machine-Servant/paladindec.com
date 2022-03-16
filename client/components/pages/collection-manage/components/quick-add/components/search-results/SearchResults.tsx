import React from 'react';
import { ImageHover, useImageHover } from '../../../../../../image-hover';
import { useQuickAdd } from '../../QuickAdd.context';
import { AddCardToCollection } from './components/add-card-to-collection';
import { Result } from './components/result';

export const SearchResults: React.FC = () => {
  const { card, handleMouseEnter, handleMouseLeave } = useImageHover();
  const { cardsInCollection } = useQuickAdd();

  if (!cardsInCollection) return null;

  return (
    <div className="max-w-2xl mt-10">
      <h2 className="mb-2 font-bold">Add To Collection</h2>
      <AddCardToCollection />
      <h2 className="mb-2 font-bold">In Collection</h2>
      <div className="relative">
        <div className="flex flex-col py-2 pb-10 pr-6 overflow-scroll border-t border-b max-h-40 border-white-900">
          {cardsInCollection?.map((cardInCollection) => (
            <Result
              key={`${cardInCollection.cardId}_${cardInCollection.isEtched}_${cardInCollection.isFoil}`}
              cardInCollection={cardInCollection}
              onMouseEnter={() => handleMouseEnter(cardInCollection.card)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
          {cardsInCollection.length === 0 && (
            <div>You do not own any copies of this card, yet...</div>
          )}
        </div>
        {cardsInCollection.length > 0 && (
          <div className="absolute bottom-0 w-full bg-white-50">
            Scroll for more
          </div>
        )}
        <ImageHover className="w-40 h-64 -top-4 -right-44" card={card} />
      </div>
      <button className="mt-4">Submit</button>
    </div>
  );
};
