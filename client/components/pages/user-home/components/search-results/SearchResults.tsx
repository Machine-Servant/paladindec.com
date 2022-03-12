import React, { useEffect } from 'react';
import { useSearchCardResultsLazyQuery } from '../../../../../@types/codegen/graphql';
import { CardResult } from './components/card-result';
import { Container } from './SearchResults.styles';

type SearchResultsProps = {
  className?: string;
  cardName?: string;
};

export const SearchResults: React.FC<SearchResultsProps> = (props) => {
  const [fetchResults, { data, loading }] = useSearchCardResultsLazyQuery();

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
    <Container className={props.className}>
      {data?.allCards.map((card) => (
        <CardResult
          key={card.id}
          card={card}
          collections={data.allCollections}
        />
      ))}
    </Container>
  );
};
