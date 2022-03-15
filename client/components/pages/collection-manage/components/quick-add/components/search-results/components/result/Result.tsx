import React from 'react';
import { QuickAddSearchResultsQuery } from '../../../../../../../../../@types/codegen/graphql';
import { SetIcon } from '../../../../../../../../set-icon';
import { Round } from './Result.styles';

type ResultProps = {
  cardInCollection?: QuickAddSearchResultsQuery['collection']['cards'][0];
  onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export const Result: React.FC<ResultProps> = (props) => {
  if (!props.cardInCollection) return null;

  return (
    <div
      className="flex flex-row items-center w-full mb-2 last:mb-0"
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <div className="flex flex-row items-center">
        <input
          type="number"
          className="w-20 p-1 mr-2 text-center border rounded-lg border-white-900"
          value={props.cardInCollection.count}
        />
        <SetIcon
          className="w-4 h-4 mr-2"
          src={props.cardInCollection.card.scryfallCard.set.iconSvgUri}
          rarity={props.cardInCollection.card.scryfallCard.rarity}
        />
        <div className="w-64 overflow-hidden truncate">
          {props.cardInCollection?.card.name}
        </div>
      </div>
      <div className="flex flex-row items-center justify-end flex-1">
        {props.cardInCollection.isEtched && <div>Etched</div>}
        {props.cardInCollection.isFoil && <div>Foil</div>}
      </div>
    </div>
  );
};
