import Image from 'next/image';
import React from 'react';
import { SearchCardResultsQuery } from '../../../../../../../@types/codegen/graphql';
import { SetIcon } from '../../../../../../set-icon';
import { Container } from './CardResult.styles';

type CardResultProps = {
  card: SearchCardResultsQuery['allCards'][0];
};

export const CardResult: React.FC<CardResultProps> = (props) => {
  const dollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
  return (
    <Container>
      <div className="flex flex-row items-stretch justify-between">
        <div className="flex flex-col justify-between flex-1 w-3/5 sm:w-auto">
          <div className="">
            <div className="text-xl font-bold">
              {props.card.scryfallCard.name}
            </div>
            <div className="flex flex-row mb-4">
              <div className="relative w-6 h-6 mr-2">
                <SetIcon
                  className="w-6 h-6"
                  src={props.card.scryfallCard.set.iconSvgUri}
                  rarity={props.card.scryfallCard.rarity}
                  title={props.card.scryfallCard.setName}
                />
              </div>
              <div>{props.card.scryfallCard.setName}</div>
            </div>
            {props.card.canBeNonFoil && (
              <div>
                Non-foil: {dollar.format(Number(props.card.currentPrice.usd))}
              </div>
            )}
            {props.card.canBeFoil && (
              <div>
                Foil: {dollar.format(Number(props.card.currentPrice.usdFoil))}
              </div>
            )}
            {props.card.canBeEtched && (
              <div>
                Foil Etched:
                {dollar.format(Number(props.card.currentPrice.usdEtched))}
              </div>
            )}
          </div>
          <div className="">Foo</div>
        </div>
        <div className="w-20 h-32 sm:w-48 sm:h-64">
          <div className="relative h-32 sm:h-64">
            <Image
              src={props.card.scryfallCard.imageUris.small}
              alt={props.card.scryfallCard.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
