import React, { useCallback, useEffect } from 'react';
import { SearchInput } from '../../../../search-input';
import { useQuickAdd } from './QuickAdd.context';
import { SearchResults } from './components/search-results';

export const QuickAdd: React.FC = () => {
  const { fetchSearchResults, setSearchCardName } = useQuickAdd();

  const handleSelect = useCallback(
    (name: string) => {
      setSearchCardName(name);
    },
    [setSearchCardName],
  );

  useEffect(() => {
    fetchSearchResults();
  }, [fetchSearchResults]);

  return (
    <div className="pt-4 pb-10">
      <h1 className="mb-1 font-bold">Quick Add</h1>
      <SearchInput onCardSearchSelect={handleSelect} />
      <SearchResults />
    </div>
  );
};
