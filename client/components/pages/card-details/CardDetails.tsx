import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { OnChangeValue } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import {
  Card,
  CardsInCollection,
  Collection,
  ScryfallCard,
  ScryfallSet,
  Tag,
  useUpdateCardInCollectionMutation,
} from '../../../@types/codegen/graphql';
import { dollar } from '../../../utils/dollar';
import { Round } from '../../icons';
import { SetIcon } from '../../set-icon';
import { MetaTag } from './CardDetails.styles';

export type CardDetailsCardInCollection = Pick<
  CardsInCollection,
  'id' | 'isFoil' | 'isEtched' | 'count' | 'price'
> & {
  tags?: Pick<Tag, 'id' | 'name'>[];
  collection: Pick<Collection, 'name' | 'userId' | 'id'>;
  card: Pick<
    Card,
    | 'name'
    | 'isBorderless'
    | 'isExtendedArt'
    | 'isPaper'
    | 'isRetro'
    | 'isShowcase'
  > & {
    scryfallCard: Pick<
      ScryfallCard,
      'typeLine' | 'oracleText' | 'rarity' | 'legalities' | 'imageUris'
    > & {
      set: Pick<ScryfallSet, 'iconSvgUri' | 'name'>;
    };
  };
};

type TagOption = Pick<Tag, 'id' | 'name'>;

type CardDetailsProps = {
  cardsInCollection: CardDetailsCardInCollection;
  otherPrintings: Partial<Card>[];
  allCardsInCollection: Partial<CardsInCollection>[];
  tags: TagOption[];
};

type GameFormat =
  | 'duel'
  | 'brawl'
  | 'penny'
  | 'future'
  | 'legacy'
  | 'modern'
  | 'pauper'
  | 'alchemy'
  | 'pioneer'
  | 'vintage'
  | 'historic'
  | 'standard'
  | 'commander'
  | 'gladiator'
  | 'oldschool'
  | 'premodern'
  | 'historicbrawl'
  | 'paupercommander';

type LegalitiesType = Record<string, 'legal' | 'not_legal'>;

const getGameFormatString = (gameFormat: GameFormat) => {
  switch (gameFormat) {
    case 'alchemy':
      return 'Alchemy';
    case 'brawl':
      return 'Brawl';
    case 'commander':
      return 'Commander';
    case 'duel':
      return 'Duel';
    case 'future':
      return 'Future';
    case 'gladiator':
      return 'Gladiator';
    case 'historic':
      return 'Historic';
    case 'historicbrawl':
      return 'Historic Brawl';
    case 'legacy':
      return 'Legacy';
    case 'modern':
      return 'Modern';
    case 'oldschool':
      return 'Old School';
    case 'pauper':
      return 'Pauper';
    case 'paupercommander':
      return 'Pauper Commander';
    case 'penny':
      return 'Penny';
    case 'pioneer':
      return 'Pioneer';
    case 'premodern':
      return 'Pre-modern';
    case 'standard':
      return 'Standard';
    case 'vintage':
      return 'Vintage';
  }
};

export const CardDetails: React.FC<CardDetailsProps> = (props) => {
  const [count, setCount] = useState<number>();
  const [availableTags, setAvailableTags] = useState<TagOption[]>([]);
  const [updateCardInCollection] = useUpdateCardInCollectionMutation();
  const [cardInCollection, setCardInCollection] =
    useState<CardDetailsCardInCollection>(props.cardsInCollection);

  const otherPrintings = useMemo(() => {
    const results: {
      card: Partial<Card>;
      isFoil: boolean;
      isEtched: boolean;
      price: number;
    }[] = [];
    props.otherPrintings.forEach((card) => {
      if (card.canBeEtched) {
        results.push({
          card,
          isFoil: false,
          isEtched: true,
          price: card.currentPrice?.usdEtched || 0,
        });
      }
      if (card.canBeFoil) {
        results.push({
          card,
          isFoil: true,
          isEtched: false,
          price: card.currentPrice?.usdFoil || 0,
        });
      }
      if (card.canBeNonFoil) {
        results.push({
          card,
          isFoil: false,
          isEtched: false,
          price: card.currentPrice?.usd || 0,
        });
      }
    });
    return results;
  }, [props.otherPrintings]);

  const handleTagCreate = useCallback((itemValue: string) => {
    setCardInCollection((current) => ({
      ...current,
      tags: current.tags
        ? [
            ...current.tags,
            { id: `temporary-${new Date().getTime()}`, name: itemValue },
          ]
        : [{ id: `temporary-${new Date().getTime()}`, name: itemValue }],
    }));
  }, []);

  const tagIdsToRemove = useMemo<string[]>(() => {
    if (props.cardsInCollection.tags?.length) {
      const originalIds = props.cardsInCollection.tags.map((t) => t.id);
      const currentIds = cardInCollection.tags?.map((t) => t.id) || [];
      return originalIds.filter(
        (originalId) => !currentIds.includes(originalId),
      );
    }
    return [];
  }, [props.cardsInCollection, cardInCollection.tags]);

  const handleTagSelectChange = useCallback(
    (newValue: OnChangeValue<TagOption, true>) => {
      setCardInCollection((current) => ({
        ...current,
        tags: [...newValue],
      }));
    },
    [],
  );

  useEffect(() => {
    if (cardInCollection) {
      setCount(cardInCollection.count);
    }
    if (props.tags) {
      setAvailableTags(props.tags);
    }
  }, [cardInCollection, props.tags]);

  const handleUpdateCardInCollection = useCallback(
    async (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (cardInCollection.id) {
        await updateCardInCollection({
          variables: {
            id: cardInCollection.id,
            input: {
              count: { set: count },
              tags: {
                disconnect: tagIdsToRemove.map((id) => ({
                  id,
                })),
                connectOrCreate: cardInCollection.tags?.map((tag) => ({
                  where: {
                    userId_name: {
                      userId: cardInCollection.collection.userId,
                      name: tag.name,
                    },
                  },
                  create: {
                    name: tag.name,
                    user: {
                      connect: { id: cardInCollection.collection.userId },
                    },
                  },
                })),
              },
            },
          },
        });
      }
    },
    [cardInCollection, count, updateCardInCollection, tagIdsToRemove],
  );

  if (!cardInCollection) return null;

  return (
    <div className="flex flex-col mx-auto max-w-screen-2xl">
      <div className="flex flex-row">
        <div className="w-full h-full">
          <div className="flex flex-row items-center mb-4">
            <div className="flex flex-row items-center">
              <h1 className="mr-2 text-2xl font-bold underline text-black-50 hover:text-green-900">
                <Link href={`/collections/${cardInCollection.collection?.id}`}>
                  {cardInCollection.collection?.name}
                </Link>
              </h1>
              <h1 className="mr-2 text-2xl font-bold text-black-50">-</h1>
              <h1 className="mr-2 text-2xl font-bold text-black-50">
                {cardInCollection.card?.name}
              </h1>
            </div>
            {cardInCollection.isEtched && (
              <MetaTag className="mr-2">Etched</MetaTag>
            )}
            {cardInCollection.isFoil && (
              <MetaTag className="mr-2">Foil</MetaTag>
            )}
            {cardInCollection.card?.isBorderless && (
              <MetaTag className="mr-2">Borderless</MetaTag>
            )}
            {cardInCollection.card?.isExtendedArt && (
              <MetaTag className="mr-2">Extended</MetaTag>
            )}
            {cardInCollection.card?.isShowcase && (
              <MetaTag className="mr-2">Showcase</MetaTag>
            )}
            {cardInCollection.card?.isRetro && (
              <MetaTag className="mr-2">Retro</MetaTag>
            )}
            {cardInCollection.card?.scryfallCard.set.iconSvgUri && (
              <SetIcon
                src={cardInCollection.card?.scryfallCard.set.iconSvgUri}
                className="w-6 h-6 mr-2"
                rarity={cardInCollection.card.scryfallCard.rarity}
              />
            )}
            <h2 className="text-xl font-bold text-black-50">
              {cardInCollection.card?.scryfallCard.set.name}
            </h2>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col w-64 h-full">
              <div className="relative flex items-center justify-center w-full mb-4 h-80">
                <Image
                  src={cardInCollection.card?.scryfallCard.imageUris.png}
                  layout="fill"
                  objectFit="contain"
                  alt={cardInCollection.card?.name}
                  priority
                />
              </div>
              <form className="flex flex-col items-start w-full">
                <div className="flex flex-row items-center w-full mb-2">
                  <input
                    type="number"
                    className="w-16 px-2 py-1 mr-2 text-xl text-right border border-white-900 rounded-xl"
                    value={count}
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                      setCount(Number(e.currentTarget.value))
                    }
                  />
                  <h4 className="text-lg">Count</h4>
                </div>
                <div className="w-full mb-4">
                  <h3 className="mb-2 font-bold">Tags</h3>
                  <CreatableSelect
                    isMulti
                    placeholder="Foo?"
                    options={availableTags.map((availableTag) => {
                      return {
                        id: availableTag.id,
                        name: availableTag.name,
                        label: availableTag.name,
                      };
                    })}
                    value={cardInCollection.tags}
                    onChange={handleTagSelectChange}
                    onCreateOption={handleTagCreate}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option.id}
                    formatCreateLabel={(inputValue: string) =>
                      `Create ${inputValue}`
                    }
                  />
                </div>
                <button
                  onClick={handleUpdateCardInCollection}
                  className="w-24 px-2 py-1 border border-white-900 rounded-xl active:bg-blue-50 active:text-white-50"
                >
                  Update
                </button>
              </form>
            </div>
            <div className="flex-1 p-4 ml-4 border bg-white-700 rounded-xl border-white-900">
              {cardInCollection.card && (
                <div className="flex flex-col">
                  <div className="mb-4">
                    <h1 className="text-2xl font-bold text-black-50">
                      {cardInCollection.card?.name}
                    </h1>
                    <div className="flex flex-row items-center">
                      <h2 className="mr-2 text-xl font-bold text-black-50">
                        {cardInCollection.card.scryfallCard.typeLine}
                      </h2>
                      <SetIcon
                        src={cardInCollection.card.scryfallCard.set.iconSvgUri}
                        rarity={cardInCollection.card.scryfallCard.rarity}
                        title={cardInCollection.card.scryfallCard.set.name}
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <hr className="mb-4 border-b border-white-900" />
                  <div className="mb-4">
                    {cardInCollection.card.scryfallCard.oracleText
                      ?.split('\n')
                      .map((line, idx) => (
                        <p key={idx} className="text-sm">
                          {line}
                        </p>
                      ))}
                  </div>
                  <hr className="mb-4 border-b border-white-900" />
                  <div
                    mb-4div
                    className="flex flex-row flex-wrap items-center justify-bewteen"
                  >
                    {Object.entries(
                      cardInCollection.card.scryfallCard
                        .legalities as LegalitiesType,
                    ).map((entry, idx) => {
                      const [gameFormat, legality] = entry;
                      return (
                        <div
                          key={idx}
                          className="flex flex-row items-center justify-between w-1/2 px-4 py-1"
                        >
                          <div className="text-sm">
                            {getGameFormatString(gameFormat as GameFormat)}
                          </div>
                          <div className="text-sm">
                            {legality === 'legal' ? <>Legal</> : <>Not Legal</>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full h-20 max-w-md pl-4">
          <div className="flex flex-row items-center justify-end">
            <h1 className="text-3xl font-bold text-green-500">
              {dollar.format(cardInCollection.price?.usd || 0)}
            </h1>
          </div>
          <div className="flex flex-col mb-4">
            <h2 className="mb-2 text-2xl font-bold">
              All Printings ({otherPrintings.length})
            </h2>
            <div className="flex flex-col pr-4 overflow-y-scroll max-h-96">
              {otherPrintings.map((otherPrinting) => (
                <>
                  <div className="flex flex-row flex-wrap items-center">
                    <div className="flex flex-row items-center flex-1">
                      {otherPrinting.card.scryfallCard && (
                        <div className="mr-2">
                          <SetIcon
                            src={
                              otherPrinting.card.scryfallCard?.set.iconSvgUri
                            }
                            rarity={otherPrinting.card.scryfallCard.rarity}
                            className="w-4 h-4"
                          />
                        </div>
                      )}
                      <div className="flex-1 mr-2">
                        {otherPrinting.card.scryfallCard?.set.name}
                      </div>
                      {otherPrinting.isEtched && (
                        <div className="px-2 mr-2 text-xs border border-blue-500 bg-blue-50 text-white-50 rounded-xl">
                          Etched
                        </div>
                      )}
                      {otherPrinting.isFoil && (
                        <div className="px-2 mr-2 text-xs border border-blue-500 bg-blue-50 text-white-50 rounded-xl">
                          Foil
                        </div>
                      )}
                      {otherPrinting.card.isShowcase && (
                        <div className="px-2 mr-2 text-xs border border-blue-500 bg-blue-50 text-white-50 rounded-xl">
                          Showcase
                        </div>
                      )}
                      {otherPrinting.card.isBorderless && (
                        <div className="px-2 mr-2 text-xs border border-blue-500 bg-blue-50 text-white-50 rounded-xl">
                          Borderless
                        </div>
                      )}
                      {otherPrinting.card.isExtendedArt && (
                        <div className="px-2 mr-2 text-xs border border-blue-500 bg-blue-50 text-white-50 rounded-xl">
                          Extended art
                        </div>
                      )}
                    </div>
                    <div className="w-10">
                      ({otherPrinting.card.scryfallCard?.collectorNumber})
                    </div>
                    <div className="w-20 text-right">
                      {dollar.format(otherPrinting.price)}
                    </div>
                  </div>
                  <hr className="my-2 border-b border-white-900" />
                </>
              ))}
            </div>
            <h3>Scroll for more (if more available)</h3>
          </div>
          <div className="">
            <h3 className="mb-2 text-lg font-bold">In your collection</h3>
            <div className="mb-2">
              {props.allCardsInCollection.map((cardInCollection) => (
                <div
                  key={cardInCollection.id}
                  className="flex flex-row items-center justify-between"
                >
                  <input
                    type="number"
                    value={cardInCollection.count}
                    className="w-10 px-1 py-1 text-right border rounded-lg border-white-900"
                  />
                  {cardInCollection.card && (
                    <>
                      <SetIcon
                        src={cardInCollection.card?.scryfallCard.set.iconSvgUri}
                        rarity={cardInCollection.card?.scryfallCard.rarity}
                        className="w-4 h-4"
                        title={cardInCollection.card.scryfallCard.set.name}
                      />
                      <span>
                        ({cardInCollection.card?.scryfallCard.collectorNumber})
                      </span>
                    </>
                  )}
                  <div className="flex flex-row items-center last-of-type:mr-0">
                    <Round
                      className="w-4 h-4 mr-1 stroke-2 fill-red-500"
                      title="Foil"
                      active={cardInCollection.isFoil}
                    />
                    <Round
                      className="w-4 h-4 mr-1 stroke-2 fill-blue-500"
                      title="Etched"
                      active={cardInCollection.isEtched}
                    />
                  </div>
                  <div className="flex flex-row items-center last-of-type:mr-0">
                    <Round
                      className="w-4 h-4 mr-1 stroke-2 fill-green-500"
                      title="Showcase"
                      active={cardInCollection.card?.isShowcase}
                    />
                    <Round
                      className="w-4 h-4 mr-1 stroke-2 fill-black-500"
                      title="Borderless"
                      active={cardInCollection.card?.isBorderless}
                    />
                    <Round
                      className="w-4 h-4 mr-1 stroke-2 fill-black-500"
                      title="Extended art"
                      active={cardInCollection.card?.isExtendedArt}
                    />
                    <Round
                      className="w-4 h-4 mr-1 stroke-2 fill-red-500"
                      title="Retro"
                      active={cardInCollection.card?.isRetro}
                    />
                  </div>
                </div>
              ))}
            </div>
            <button>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};
