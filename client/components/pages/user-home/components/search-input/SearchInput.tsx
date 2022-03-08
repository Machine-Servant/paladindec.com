import { gql, useLazyQuery } from '@apollo/client';
import React, { useCallback, useEffect } from 'react';
import { AutocompleteInput } from '../../../../autocomplete-search';

const QUERY = gql`
  query SearchCards($term: String!) {
    allScryfallCardNames(
      take: 10
      where: { name: { startsWith: $term, mode: insensitive } }
    ) {
      id
      name
    }
  }
`;

type SearchInputProps = {
  onCardSearchSelect: (name: string) => void;
};

export const SearchInput: React.FC<SearchInputProps> = (props) => {
  const [findCards, { data, loading, error }] =
    useLazyQuery<{ allScryfallCardNames: { name: string; id: string }[] }>(
      QUERY,
    );

  const handleFindCards = useCallback(
    async (term: string) => {
      if (term && term.length > 0) {
        await findCards({ variables: { term } });
      }
    },
    [findCards],
  );

  const handleSelect = useCallback(
    (item: { name: string; id: string }) => {
      props.onCardSearchSelect(item.name);
    },
    [props],
  );

  return (
    <AutocompleteInput
      loading={loading}
      items={data?.allScryfallCardNames}
      extractKey={(item) => item.id}
      extractLabel={(item) => item.name}
      onTextChange={handleFindCards}
      onSelect={handleSelect}
      renderItem={(item) => (
        <div className="px-2 py-1 truncate whitespace-nowrap" title={item.name}>
          {item.name}
        </div>
      )}
    />
  );
};
