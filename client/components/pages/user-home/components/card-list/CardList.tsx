import { gql, useLazyQuery } from '@apollo/client';
import React, { useEffect } from 'react';

const QUERY = gql`
  query Cards {
    allCards(take: 10) {
      id
      scryfallCard {
        name
      }
    }
  }
`;

export const CardList = () => {
  const [fetchCards, { data }] = useLazyQuery<{
    allCards: { id: string; scryfallCard: { name: string } }[];
  }>(QUERY, { fetchPolicy: 'network-only' });

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  return (
    <>
      {data?.allCards.map((item) => (
        <div key={item.id}>{item.scryfallCard.name}</div>
      ))}
    </>
  );
};
