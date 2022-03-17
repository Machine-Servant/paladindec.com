import { ColumnState } from '@ag-grid-community/core';
import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';

type CollectionGridContextType = {
  columnState: ColumnState[] | undefined;
  setColumnState: React.Dispatch<
    React.SetStateAction<ColumnState[] | undefined>
  >;
};

const CollectionGridContext = React.createContext<
  CollectionGridContextType | undefined
>(undefined);

const COLUMN_STATE_KEY = 'paladindeck:collectiongrid:columnState';

export const CollectionGridProvider: React.FC<
  React.PropsWithChildren<unknown>
> = (props) => {
  const [columnState, setColumnState] = useState<ColumnState[]>();

  useEffect(() => {
    const storedColumnState = localStorage.getItem(COLUMN_STATE_KEY);
    if (storedColumnState) {
      const parsed = JSON.parse(storedColumnState);
      if (!isEmpty(parsed)) {
        setColumnState(parsed);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(COLUMN_STATE_KEY, JSON.stringify(columnState));
  }, [columnState]);

  return (
    <CollectionGridContext.Provider value={{ columnState, setColumnState }}>
      {props.children}
    </CollectionGridContext.Provider>
  );
};

export const useCollectionGrid = () => {
  const contextValue = React.useContext(CollectionGridContext);
  if (contextValue === undefined) {
    throw new Error(
      'You may only use the useCollectionGrid hook from inside a CollectionGridProvider',
    );
  }
  return contextValue;
};
