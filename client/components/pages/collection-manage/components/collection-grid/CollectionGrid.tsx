import {
  ColDef,
  GridReadyEvent,
  IServerSideDatasource,
  SortChangedEvent,
  ValueFormatterParams,
} from '@ag-grid-community/core';
import { AgGridReact } from '@ag-grid-community/react';
import { ServerSideRowModelModule } from '@ag-grid-enterprise/server-side-row-model';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import React, { memo, useCallback, useMemo, useState } from 'react';
import {
  CardsInCollectionOrderByWithRelationInput,
  CollectionManageQuery,
  PaginatedCardsInCollectionQuery,
  SortOrder,
  usePaginatedCardsInCollectionLazyQuery,
} from '../../../../../@types/codegen/graphql';
import { useCollectionGrid } from '../../../../../contexts/collection-grid';
import { dollar } from '../../../../../utils/dollar';
import { CheckmarkCellRenderer } from './components/checkmark-cell-renderer';
import { ImageCellRenderer } from './components/image-cell-renderer';
import { ImageTooltip } from './components/image-tooltip';
import { MgmtCellRenderer } from './components/mgmt-cell-renderer';
import { NameCellRenderer } from './components/name-cell-renderer';
import { SetCellRenderer } from './components/set-cell-renderer';

export type CardInCollection =
  PaginatedCardsInCollectionQuery['collection']['cards'][0];

export type CollectionGridProps = {
  collection: CollectionManageQuery['collection'];
  onDeleteCardFromCollection: (card: CardInCollection) => void;
  onUpdateCardCount: (
    card: Pick<CardInCollection, 'isEtched' | 'isFoil'> & {
      cardId: string;
      collectionId: string;
    },
    count: number,
  ) => void;
  ref: React.RefObject<AgGridReact>;
};

type RowDataType = {
  '#': number;
  set: {
    set: CardInCollection['card']['scryfallCard']['set'];
    rarity: CardInCollection['card']['scryfallCard']['rarity'];
  };
  name: CardInCollection['card']['name'];
  foil: CardInCollection['isFoil'];
  etched: CardInCollection['isEtched'];
  price: number;
  cn: CardInCollection['card']['collectorNumber'];
  modified: string;
  mgmt: { cardInCollection: CardInCollection };
  _images: unknown[];
  _cardId: string;
};

// eslint-disable-next-line react/display-name
export const CollectionGrid = React.forwardRef<
  AgGridReact,
  CollectionGridProps
>((props, ref) => {
  const MemoizedSetCellRenderer = memo(SetCellRenderer);
  const MemoizedCheckmarkCellRenderer = memo(CheckmarkCellRenderer);
  const MemoizedMgmtCellRenderer = memo(MgmtCellRenderer);
  const MemoizedImageCellRenderer = memo(ImageCellRenderer);
  const MemoizedNameCellRenderer = memo(NameCellRenderer);
  const collectorNumberFormatter = useCallback(
    (params: ValueFormatterParams) => `(${params.value})`,
    [],
  );
  const priceFormatter = useCallback(
    (params: ValueFormatterParams) => dollar.format(params.value),
    [],
  );

  const { columnState, setColumnState } = useCollectionGrid();

  const modules = useMemo(() => [ServerSideRowModelModule], []);
  const [fetchCards] = usePaginatedCardsInCollectionLazyQuery();

  const serverSideDatasource = useCallback((): IServerSideDatasource => {
    return {
      getRows: async (params) => {
        if (!params.request.endRow || !params.request.startRow) {
          params.request.endRow = 50;
          params.request.startRow = 0;
        }

        const orderBy: CardsInCollectionOrderByWithRelationInput[] = [];
        params.request.sortModel.forEach((sortOption) => {
          if (!['asc', 'desc'].includes(sortOption.sort)) return;
          switch (sortOption.colId) {
            case 'price':
              orderBy.push({
                card: {
                  currentPrice: {
                    usd:
                      sortOption.sort === 'asc'
                        ? SortOrder.Asc
                        : SortOrder.Desc,
                  },
                },
              });
              break;
            case 'modified':
              orderBy.push({
                updatedAt:
                  sortOption.sort === 'asc' ? SortOrder.Asc : SortOrder.Desc,
              });
              break;
            default:
              break;
          }
        });

        const { data } = await fetchCards({
          variables: {
            collectionId: props.collection.id,
            take: params.request.endRow - params.request.startRow,
            skip: params.request.startRow,
            orderBy,
          },
        });

        if (data?.collection) {
          params.success({
            rowCount: data.collection._count.cards,
            rowData: data?.collection.cards.map((cardInCollection) => ({
              '#': cardInCollection.count,
              set: {
                set: cardInCollection.card.scryfallCard.set,
                rarity: cardInCollection.card.scryfallCard.rarity,
              },
              name: {
                name: cardInCollection.card.name,
                collectionId: props.collection.id,
                id: cardInCollection.id,
              },
              foil: cardInCollection.isFoil,
              etched: cardInCollection.isEtched,
              price: cardInCollection.price?.usd,
              cn: cardInCollection.card.collectorNumber,
              modified: Intl.DateTimeFormat('en-US', {
                dateStyle: 'short',
                timeStyle: 'short',
              }).format(new Date(cardInCollection.updatedAt)),
              mgmt: {
                cardInCollection,
              },
              img: cardInCollection.card.name,
              _images: cardInCollection.card.scryfallCard.imageUris,
              _cardId: cardInCollection.card.id,
            })),
          });
        } else {
          params.fail();
        }
      },
    };
  }, [fetchCards, props.collection]);

  const [columnDefs] = useState<ColDef[]>([
    {
      field: '#',
      width: 70,
      editable: true,
      type: 'rightAligned',
    },
    {
      field: 'img',
      width: 65,
      cellRenderer: MemoizedImageCellRenderer,
      tooltipField: 'img',
    },
    {
      field: 'cn',
      valueFormatter: collectorNumberFormatter,
      width: 80,
    },
    { field: 'set', cellRenderer: MemoizedSetCellRenderer, width: 60 },
    {
      field: 'name',
      flex: 1,
      cellRenderer: MemoizedNameCellRenderer,
    },
    { field: 'foil', cellRenderer: MemoizedCheckmarkCellRenderer, width: 60 },
    {
      field: 'etched',
      cellRenderer: MemoizedCheckmarkCellRenderer,
      width: 90,
    },
    {
      field: 'price',
      valueFormatter: priceFormatter,
      type: 'numericColumn',
      width: 100,
      sortable: true,
    },
    { field: 'modified', sortable: true, width: 170 },
    {
      field: 'mgmt',
      cellRenderer: MemoizedMgmtCellRenderer,
      cellRendererParams: {
        onDeleteClick: (cardInCollection: CardInCollection) =>
          props.onDeleteCardFromCollection(cardInCollection),
      },
      width: 75,
      type: 'rightAligned',
    },
  ]);

  const handleGridReady = useCallback(
    (params: GridReadyEvent) => {
      if (!ref) return;
      params.api.setServerSideDatasource(serverSideDatasource());

      if (!columnState) return;
      params.columnApi.applyColumnState({ state: columnState });
    },
    [ref, serverSideDatasource, columnState],
  );

  const handleSortChanged = useCallback(
    (params: SortChangedEvent) => {
      setColumnState(params.columnApi.getColumnState());
    },
    [setColumnState],
  );

  return (
    <div className="w-full h-full mx-auto ag-theme-alpine">
      <AgGridReact
        ref={ref}
        modules={modules}
        rowModelType="serverSide"
        columnDefs={columnDefs}
        defaultColDef={{ tooltipComponent: ImageTooltip }}
        tooltipShowDelay={100}
        suppressCellFocus
        onGridReady={handleGridReady}
        pagination
        paginationPageSize={50}
        cacheBlockSize={50}
        serverSideStoreType="partial"
        onSortChanged={handleSortChanged}
        onCellValueChanged={(params: { data: RowDataType }) => {
          props.onUpdateCardCount(
            {
              cardId: params.data._cardId,
              collectionId: props.collection.id,
              isEtched: params.data.etched,
              isFoil: params.data.foil,
            },
            Number(params.data['#']),
          );
        }}
      />
    </div>
  );
});
