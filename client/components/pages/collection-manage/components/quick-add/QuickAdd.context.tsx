import React, { useCallback, useReducer } from 'react';
import {
  AddCardToCollectionInput,
  CollectionManageQuery,
  QuickAddSearchResultsQuery,
  useQuickAddCardToCollectionMutation,
  useQuickAddSearchResultsLazyQuery,
} from '../../../../../@types/codegen/graphql';

enum QuickAddAction {
  SetSearchCardName = 'SET_SEARCH_CARD_NAME',
  SetSelectedCard = 'SET_SELECTED_CARD',
  SetSearchResults = 'SET_SEARCH_RESULTS',
  SetCardsInCollectionResults = 'SET_CARDS_IN_COLLECTION_RESULTS',
}

export type QuickAddActionType =
  | {
      type: QuickAddAction.SetSearchCardName;
      payload: string;
    }
  | {
      type: QuickAddAction.SetSelectedCard;
      payload?: QuickAddSearchResultsQuery['allCards'][0];
    }
  | {
      type: QuickAddAction.SetSearchResults;
      payload: QuickAddSearchResultsQuery['allCards'];
    }
  | {
      type: QuickAddAction.SetCardsInCollectionResults;
      payload: QuickAddSearchResultsQuery['collection']['cards'];
    };

type QuickAddState = {
  searchCardName?: string;
  selectedCard?: QuickAddSearchResultsQuery['allCards'][0];
  searchResults?: QuickAddSearchResultsQuery['allCards'];
  cardsInCollection?: QuickAddSearchResultsQuery['collection']['cards'];
};

const initialState = {};
const quickAddReducer = (
  previousState: QuickAddState,
  action: QuickAddActionType,
): QuickAddState => {
  const { type, payload } = action;

  switch (type) {
    case QuickAddAction.SetSelectedCard: {
      return { ...previousState, selectedCard: payload };
    }
    case QuickAddAction.SetSearchCardName: {
      return { ...previousState, searchCardName: payload };
    }
    case QuickAddAction.SetSearchResults: {
      return { ...previousState, searchResults: payload };
    }
    case QuickAddAction.SetCardsInCollectionResults: {
      return { ...previousState, cardsInCollection: payload };
    }
    default:
      return previousState;
  }
};

type QuickAddContextType = {
  setSelectedCard: (card?: QuickAddSearchResultsQuery['allCards'][0]) => void;
  setSearchCardName: (name: string) => void;
  fetchSearchResults: () => Promise<void>;
  quickAddCardToCollection: (input: AddCardToCollectionInput) => Promise<void>;
  collection: CollectionManageQuery['collection'];
} & QuickAddState;

const QuickAddContext = React.createContext<QuickAddContextType | undefined>(
  undefined,
);

export const QuickAddProvider: React.FC<
  React.PropsWithChildren<{
    collection: CollectionManageQuery['collection'];
    onCardAddedToCollection: (
      cardId: string,
      collection: CollectionManageQuery['collection'],
    ) => void;
  }>
> = ({ children, ...props }) => {
  const [state, dispatch] = useReducer(quickAddReducer, initialState);

  const setSelectedCard = useCallback(
    (card?: QuickAddSearchResultsQuery['allCards'][0]) => {
      return dispatch({ type: QuickAddAction.SetSelectedCard, payload: card });
    },
    [],
  );

  const setSearchCardName = useCallback((name: string) => {
    return dispatch({ type: QuickAddAction.SetSearchCardName, payload: name });
  }, []);

  const [doFetchSearchResults] = useQuickAddSearchResultsLazyQuery();
  const fetchSearchResults = useCallback(async () => {
    if (!state.searchCardName) return;
    const results = await doFetchSearchResults({
      variables: {
        name: state.searchCardName,
        collectionId: props.collection.id,
      },
    });
    if (!results.data) return;
    dispatch({
      type: QuickAddAction.SetSearchResults,
      payload: results.data?.allCards,
    });
    dispatch({
      type: QuickAddAction.SetCardsInCollectionResults,
      payload: results.data.collection.cards,
    });
  }, [doFetchSearchResults, props.collection.id, state.searchCardName]);

  const [doQuickAddCardToCollection] = useQuickAddCardToCollectionMutation();
  const quickAddCardToCollection = useCallback(
    async (input: AddCardToCollectionInput) => {
      if (!state.selectedCard) return;
      const results = await doQuickAddCardToCollection({
        variables: { input },
      });
      if (results.data?.addCardToCollection.cardId) {
        props.onCardAddedToCollection(
          results.data.addCardToCollection.cardId,
          props.collection,
        );
      }
      await fetchSearchResults();
    },
    [state.selectedCard, doQuickAddCardToCollection, fetchSearchResults, props],
  );

  return (
    <QuickAddContext.Provider
      value={{
        setSelectedCard,
        setSearchCardName,
        fetchSearchResults,
        quickAddCardToCollection,
        collection: props.collection,
        ...state,
      }}
    >
      {children}
    </QuickAddContext.Provider>
  );
};

export const useQuickAdd = (): QuickAddContextType => {
  const contextValue = React.useContext(QuickAddContext);
  if (contextValue === undefined) {
    throw new Error(
      'You may only use the useQuickAdd hook from inside a QuickAddProvider.',
    );
  }

  return contextValue;
};
