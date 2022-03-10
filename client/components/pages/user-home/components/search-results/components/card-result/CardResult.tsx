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
      <div className="flex flex-row items-start justify-center">
        <div className="w-3/5">
          <div className="text-xl font-bold">
            {props.card.scryfallCard.name}
          </div>
          <div className="flex flex-row items-center mb-4">
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
          <div>
            Non-foil: {dollar.format(Number(props.card.currentPrice.usd))}
          </div>
          <div>
            Foil: {dollar.format(Number(props.card.currentPrice.usdFoil))}
          </div>
          {props.card.isEtched && (
            <div>
              Foil Etched:
              {dollar.format(Number(props.card.currentPrice.usdEtched))}
            </div>
          )}
        </div>
        <div className="relative flex flex-row items-end flex-1 h-64">
          <Image
            src={props.card.scryfallCard.imageUris.small}
            alt="foo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </Container>
  );
};
