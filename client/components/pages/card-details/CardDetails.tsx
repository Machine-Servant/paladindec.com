import Image from 'next/image';
import React, { useMemo } from 'react';
import { Card, CardsInCollection } from '../../../@types/codegen/graphql';
import { dollar } from '../../../utils/dollar';
import { Round } from '../../icons';
import { SetIcon } from '../../set-icon';
import { MetaTag } from './CardDetails.styles';

type CardDetailsProps = {
  cardsInCollection: Partial<CardsInCollection>;
  otherPrintings: Partial<Card>[];
  allCardsInCollection: Partial<CardsInCollection>[];
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

  if (!props.cardsInCollection) return null;

  return (
    <div className="flex flex-row mx-auto max-w-screen-2xl">
      <div className="w-full h-full">
        <div className="flex flex-row items-center mb-4">
          <h1 className="mr-2 text-2xl font-bold text-black-50">
            {props.cardsInCollection.card?.name}
          </h1>
          {props.cardsInCollection.isEtched && (
            <MetaTag className="mr-2">Etched</MetaTag>
          )}
          {props.cardsInCollection.isFoil && (
            <MetaTag className="mr-2">Foil</MetaTag>
          )}
          {props.cardsInCollection.card?.isBorderless && (
            <MetaTag className="mr-2">Borderless</MetaTag>
          )}
          {props.cardsInCollection.card?.isExtendedArt && (
            <MetaTag className="mr-2">Extended</MetaTag>
          )}
          {props.cardsInCollection.card?.isShowcase && (
            <MetaTag className="mr-2">Showcase</MetaTag>
          )}
          {props.cardsInCollection.card?.isRetro && (
            <MetaTag className="mr-2">Retro</MetaTag>
          )}
          {props.cardsInCollection.card?.scryfallCard.set.iconSvgUri && (
            <SetIcon
              src={props.cardsInCollection.card?.scryfallCard.set.iconSvgUri}
              className="w-6 h-6 mr-2"
              rarity={props.cardsInCollection.card.scryfallCard.rarity}
            />
          )}
          <h2 className="text-xl font-bold text-black-50">
            {props.cardsInCollection.card?.scryfallCard.set.name}
          </h2>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col h-full">
            <div className="relative flex items-center justify-center h-96 w-72">
              <Image
                src={props.cardsInCollection.card?.scryfallCard.imageUris.png}
                layout="fill"
                objectFit="contain"
                alt={props.cardsInCollection.card?.name}
              />
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
                          src={
                            cardInCollection.card?.scryfallCard.set.iconSvgUri
                          }
                          rarity={cardInCollection.card?.scryfallCard.rarity}
                          className="w-4 h-4"
                          title={cardInCollection.card.scryfallCard.set.name}
                        />
                        <span>
                          ({cardInCollection.card?.scryfallCard.collectorNumber}
                          )
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
          <div className="flex-1 p-4 border bg-white-700 rounded-xl border-white-900">
            {props.cardsInCollection.card && (
              <div className="flex flex-col">
                <div className="mb-4">
                  <h1 className="text-2xl font-bold text-black-50">
                    {props.cardsInCollection.card?.name}
                  </h1>
                  <div className="flex flex-row items-center">
                    <h2 className="mr-2 text-xl font-bold text-black-50">
                      {props.cardsInCollection.card.scryfallCard.typeLine}
                    </h2>
                    <SetIcon
                      src={
                        props.cardsInCollection.card.scryfallCard.set.iconSvgUri
                      }
                      rarity={props.cardsInCollection.card.scryfallCard.rarity}
                      title={props.cardsInCollection.card.scryfallCard.set.name}
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <hr className="mb-4 border-b border-white-900" />
                <div className="mb-4">
                  {props.cardsInCollection.card.scryfallCard.oracleText
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
                    props.cardsInCollection.card.scryfallCard
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
            {dollar.format(props.cardsInCollection.price?.usd || 0)}
          </h1>
        </div>
        <div className="flex flex-col">
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
                          src={otherPrinting.card.scryfallCard?.set.iconSvgUri}
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
      </div>
    </div>
  );
};
