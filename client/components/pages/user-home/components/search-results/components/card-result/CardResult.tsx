import Image from 'next/image';
import React from 'react';
import { SearchCardResultsQuery } from '../../../../../../../@types/codegen/graphql';
import { Container } from './CardResult.styles';

type CardResultProps = {
  card: SearchCardResultsQuery['allCards'][0];
};

export const CardResult: React.FC<CardResultProps> = (props) => {
  return (
    <Container>
      <div className="flex flex-row items-start justify-center">
        <div className="w-3/5">
          <div className="text-xl font-bold">
            {props.card.scryfallCard.name}
          </div>
          <div className="flex flex-row items-center mb-4">
            <div className="relative w-6 h-6 mr-2">
              <Image
                loader={() => props.card.scryfallCard.set.iconSvgUri}
                src={props.card.scryfallCard.set.iconSvgUri}
                alt={props.card.scryfallCard.setName}
                unoptimized
                layout="fill"
              />
            </div>
            <div>{props.card.scryfallCard.setName}</div>
          </div>
          {props.card.isEtched ? (
            <div>USD (etched): ${props.card.currentPrice.usdEtched}</div>
          ) : (
            <>
              <div>USD: ${props.card.currentPrice.usd}</div>
              <div>USD (foil): ${props.card.currentPrice.usdFoil}</div>
            </>
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
