import { gql, useLazyQuery } from '@apollo/client';
import React, { useEffect } from 'react';

type SearchResultsProps = {
  className?: string;
  cardName?: string;
};

const QUERY = gql`
  query SearchCardResults($name: String!) {
    allCards(
      where: {
        isPaper: { equals: true }
        scryfallCard: { is: { name: { equals: $name } } }
      }
    ) {
      id
      canBeFoil
      collectorNumber
      isBorderless
      isShowcase
      currentPrice {
        usd
        usdFoil
        usdEtched
      }
      scryfallCard {
        name
        set {
          name
        }
      }
    }
  }
`;

export const SearchResults: React.FC<SearchResultsProps> = (props) => {
  const [fetchResults, { data, loading, error }] = useLazyQuery(QUERY);

  useEffect(() => {
    const doFetch = async () => {
      if (props.cardName) {
        await fetchResults({ variables: { name: props.cardName } });
      }
    };
    doFetch();
  }, [props.cardName, fetchResults]);

  if (!props.cardName) return null;
  if (loading) return <div>Loading...</div>;

  return (
    <ul className={props.className}>
      {data?.allCards?.map((card) => (
        <li key={card.id}>
          <div>{card.scryfallCard.name}</div>
          <div>Set: {card.scryfallCard.set?.name}</div>
          <div>Usd: ${card.currentPrice.usd}</div>
          <div>Usd (foil): ${card.currentPrice.usdFoil}</div>
          <div>Usd (etched): ${card.currentPrice.usdEtched}</div>
        </li>
      ))}
    </ul>
  );
};
