import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import {
  SearchCardResultsQuery,
  useAddCardToCollectionMutation,
} from '../../../../../../../@types/codegen/graphql';
import { SetIcon } from '../../../../../../set-icon';
import { Container, FinishSelect } from './CardResult.styles';
import { PriceList } from './components/price-list';

type CardResultProps = {
  card: SearchCardResultsQuery['allCards'][0];
  collections: SearchCardResultsQuery['allCollections'];
};

enum CardFinish {
  NON_FOIL = 'nonfoil',
  FOIL = 'foil',
  ETCHED = 'etched',
}

export const CardResult: React.FC<CardResultProps> = (props) => {
  const [finish, setFinish] = useState<CardFinish>(CardFinish.NON_FOIL);
  const [count, setCount] = useState<number>(1);
  const [collection, setCollection] =
    useState<CardResultProps['collections'][0]>();

  const [addCardToCollection, { loading }] = useAddCardToCollectionMutation();

  useEffect(() => {
    if (!props.card.canBeNonFoil) {
      if (props.card.canBeFoil) {
        setFinish(CardFinish.FOIL);
      } else if (props.card.canBeEtched) {
        setFinish(CardFinish.ETCHED);
      }
    }

    if (props.collections.length) {
      setCollection(props.collections[0]);
    }
  }, [props.card, props.collections]);

  const handleAddCardToCollection = useCallback(() => {
    const doAddCardToCollection = async () => {
      if (finish && count && collection) {
        const results = await addCardToCollection({
          variables: {
            input: {
              cardId: props.card.id,
              collectionId: collection.id,
              isEtched: finish === CardFinish.ETCHED,
              isFoil: finish === CardFinish.FOIL,
              count,
            },
          },
        });
        console.log(`Success!`, results);
      }
    };
    doAddCardToCollection();
  }, [finish, count, addCardToCollection, collection, props.card]);

  return (
    <Container isLoading={loading}>
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
              <div className="mr-2">{props.card.scryfallCard.setName}</div>
              <div>({props.card.scryfallCard.collectorNumber})</div>
            </div>
            <PriceList {...props.card.currentPrice} />
          </div>
          <div className="flex flex-row flex-wrap items-center justify-start">
            <FinishSelect
              disabled={!props.card.canBeNonFoil}
              active={finish === CardFinish.NON_FOIL}
              onClick={() => setFinish(CardFinish.NON_FOIL)}
            >
              Non-foil
            </FinishSelect>
            <FinishSelect
              disabled={!props.card.canBeFoil}
              active={finish === CardFinish.FOIL}
              onClick={() => setFinish(CardFinish.FOIL)}
            >
              Foil
            </FinishSelect>
            <FinishSelect
              disabled={!props.card.canBeEtched}
              active={finish === CardFinish.ETCHED}
              onClick={() => setFinish(CardFinish.ETCHED)}
            >
              Etched
            </FinishSelect>
          </div>
          <div className="">
            <div className="flex flex-row items-center">
              <select className="w-48 px-4 py-2 mr-2">
                {props.collections.map((collection) => (
                  <option key={collection.id} value={collection.id}>
                    {collection.name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                className="w-16 p-2 mr-2 text-center border rounded-lg border-black-50"
                value={count}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setCount(Number(e.currentTarget.value))
                }
              />
              <button
                className="px-4 py-2 border rounded-full border-white-900 active:bg-green-50 active:text-white-50"
                onClick={handleAddCardToCollection}
              >
                Add to collection
              </button>
            </div>
          </div>
        </div>
        <div className="w-20 h-32 sm:w-48 sm:h-64">
          <div className="relative h-32 sm:h-64">
            <Image
              src={props.card.scryfallCard.imageUris.large}
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
