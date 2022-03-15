import React, { useCallback, useEffect, useState } from 'react';
import {
  CollectionManageQuery,
  useQuickAddSearchResultsLazyQuery,
} from '../../../../../@types/codegen/graphql';
import { SearchInput } from '../../../../search-input';
import { SearchResults } from './components/search-results';

type QuickAddProps = {
  collection: CollectionManageQuery['collection'];
  onAddComplete: (() => void) | (() => Promise<void>);
};

export const QuickAdd: React.FC<QuickAddProps> = (props) => {
  const [name, setName] = useState<string>();
  const [fetchResults, { data, loading }] = useQuickAddSearchResultsLazyQuery();

  const doFetch = useCallback(
    async (name: string) => {
      await fetchResults({
        variables: { collectionId: props.collection.id, name: name },
      });
    },
    [fetchResults, props.collection],
  );

  const handleSelect = useCallback((name: string) => {
    setName(name);
  }, []);

  const handleAddComplete = useCallback(() => {
    const doAddComplete = async () => {
      if (name) {
        await doFetch(name);
      }
      await props.onAddComplete();
    };
    doAddComplete();
  }, [name, doFetch, props]);

  useEffect(() => {
    if (name) {
      doFetch(name);
    }
  }, [doFetch, name]);

  return (
    <div className="pt-4 pb-10">
      <h1 className="mb-1 font-bold">Quick Add</h1>
      <SearchInput onCardSearchSelect={handleSelect} />
      <SearchResults
        isLoading={loading}
        results={data}
        onAddComplete={handleAddComplete}
      />
    </div>
  );
};
