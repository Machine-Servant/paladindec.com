import { DefaultContext, gql, useLazyQuery, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { useAuth } from '../../../../../hooks/useAuth';

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
  const [fetchCards, { data, loading, error }] = useLazyQuery<{
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
