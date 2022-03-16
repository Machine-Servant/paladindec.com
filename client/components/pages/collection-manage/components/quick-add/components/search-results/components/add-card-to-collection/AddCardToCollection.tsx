import React, { useCallback, useEffect, useState } from 'react';
import { QuickAddSearchResultsQuery } from '../../../../../../../../../@types/codegen/graphql';
import { DropdownSelect } from '../../../../../../../../dropdown-select';
import { ImageHover, useImageHover } from '../../../../../../../../image-hover';
import { SetIcon } from '../../../../../../../../set-icon';
import { useQuickAdd } from '../../../../QuickAdd.context';
import { SwitchButton } from './AddCardToCollection.styles';

type Card = QuickAddSearchResultsQuery['allCards'][0];

export const AddCardToCollection: React.FC = () => {
  const {
    collection,
    selectedCard,
    setSelectedCard,
    searchResults,
    quickAddCardToCollection,
  } = useQuickAdd();
  const [count, setCount] = useState<number>(1);
  const [isFoil, setIsFoil] = useState<boolean>(false);
  const [isEtched, setIsEtched] = useState<boolean>(false);

  const {
    card: hoverCard,
    hideHover,
    handleMouseEnter,
    handleMouseLeave,
  } = useImageHover();

  const {
    card: selectedHoverCard,
    handleMouseEnter: handleSelectionMouseEnter,
    handleMouseLeave: handleSelectionMouseLeave,
  } = useImageHover();

  const handleSelect = (card: Card) => {
    hideHover();
    setSelectedCard(card);
  };

  const handleClickFoil = useCallback(() => {
    setIsFoil((current) => !current);
    setIsEtched(false);
  }, []);

  const handleClickEtched = useCallback(() => {
    setIsEtched((current) => !current);
    setIsFoil(false);
  }, []);

  const handleAddCardToCollectionClick = useCallback(async () => {
    if (!selectedCard) return;
    if (!collection) return;
    await quickAddCardToCollection({
      cardId: selectedCard.id,
      collectionId: collection.id,
      isEtched,
      isFoil,
      count,
    });
  }, [
    quickAddCardToCollection,
    selectedCard,
    collection,
    isEtched,
    isFoil,
    count,
  ]);

  useEffect(() => {
    if (!searchResults?.length) return;
    setSelectedCard(searchResults[0]);
  }, [searchResults, setSelectedCard]);

  useEffect(() => {
    console.log(selectedCard);
  }, [selectedCard]);

  return (
    <div className="relative flex flex-row items-center justify-between mb-4">
      <DropdownSelect
        className="w-64 h-10 mr-2"
        items={searchResults}
        renderSelectedItem={(item: Card) => (
          <div
            className="flex flex-row items-center justify-start w-full"
            title={`${item.name} ${item.collectorNumber} [${item.scryfallCard.set.code}]`}
            onMouseEnter={() => handleSelectionMouseEnter(item)}
            onMouseLeave={handleSelectionMouseLeave}
          >
            <SetIcon
              src={item.scryfallCard.set.iconSvgUri}
              rarity={item.scryfallCard.rarity}
              className="w-4 h-4 mr-2"
            />
            <div className="flex-1 truncate whitespace-nowrap">
              {item?.name} ({item?.collectorNumber})
            </div>
            <ImageHover className="w-40 h-52 top-8" card={selectedHoverCard} />
          </div>
        )}
        renderItem={(item: Card) => (
          <div
            className="flex flex-row items-center px-1 mb-2"
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
          >
            <SetIcon
              src={item.scryfallCard.set.iconSvgUri}
              rarity={item.scryfallCard.rarity}
              className="w-6 h-6 mr-1"
            />
            <div className="flex-1 mr-1 truncate">{item.name}</div>
            <div className="w-10">({item.collectorNumber})</div>
          </div>
        )}
        value={selectedCard}
        onSelect={(item) => handleSelect(item)}
        extractKey={(item) => item.id}
      />
      <SwitchButton
        isActive={isFoil}
        onClick={handleClickFoil}
        disabled={!selectedCard?.canBeFoil}
      >
        Foil
      </SwitchButton>
      <SwitchButton
        isActive={isEtched}
        onClick={handleClickEtched}
        disabled={!selectedCard?.canBeEtched}
      >
        Etched
      </SwitchButton>
      <input
        type="number"
        className="w-20 px-2 py-1 text-right border rounded-lg border-white-900"
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setCount(Number(e.currentTarget.value))
        }
        value={count}
      />
      <button className="ml-2" onClick={handleAddCardToCollectionClick}>
        Add
      </button>
      <ImageHover className="w-40 h-52 top-8 left-48" card={hoverCard} />
    </div>
  );
};
