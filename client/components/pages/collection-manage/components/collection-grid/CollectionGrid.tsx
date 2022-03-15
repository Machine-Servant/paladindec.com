import {
  ColDef,
  GridReadyEvent,
  IServerSideDatasource,
  ValueFormatterParams,
} from '@ag-grid-community/core';
import { AgGridReact } from '@ag-grid-community/react';
import { ServerSideRowModelModule } from '@ag-grid-enterprise/server-side-row-model';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import React, { memo, useCallback, useMemo, useRef, useState } from 'react';
import {
  CardsInCollectionOrderByWithRelationInput,
  CollectionManageQuery,
  SortOrder,
  usePaginatedCardsInCollectionLazyQuery,
} from '../../../../../@types/codegen/graphql';
import { dollar } from '../../../../../utils/dollar';
import { CheckmarkCellRenderer } from './components/checkmark-cell-renderer';
import { ImageTooltip } from './components/image-tooltip';
import { MgmtCellRenderer } from './components/mgmt-cell-renderer';
import { SetCellRenderer } from './components/set-cell-renderer';

export type CollectionGridProps = {
  collection: CollectionManageQuery['collection'];
};

export const CollectionGrid: React.FC<CollectionGridProps> = (props) => {
  const MemoizedSetCellRenderer = memo(SetCellRenderer);
  const MemoizedCheckmarkCellRenderer = memo(CheckmarkCellRenderer);
  const MemoizedMgmtCellRenderer = memo(MgmtCellRenderer);
  const collectorNumberFormatter = useCallback(
    (params: ValueFormatterParams) => `(${params.value})`,
    [],
  );
  const priceFormatter = useCallback(
    (params: ValueFormatterParams) => dollar.format(params.value),
    [],
  );

  const ref = useRef<AgGridReact>(null);
  const modules = useMemo(() => [ServerSideRowModelModule], []);
  const [fetchCards] = usePaginatedCardsInCollectionLazyQuery();

  const serverSideDatasource = useCallback((): IServerSideDatasource => {
    return {
      getRows: async (params) => {
        if (!params.request.endRow || !params.request.startRow) {
          params.request.endRow = 50;
          params.request.startRow = 0;
        }
        let orderBy: CardsInCollectionOrderByWithRelationInput[] = [];
        const byPrice = params.request.sortModel?.find(
          (model) => model.colId === 'price',
        );
        if (byPrice) {
          orderBy = [
            {
              card: {
                currentPrice: {
                  usd: byPrice.sort === 'asc' ? SortOrder.Asc : SortOrder.Desc,
                },
              },
            },
          ];
        }
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
              name: cardInCollection.card.name,
              foil: cardInCollection.isFoil,
              etched: cardInCollection.isEtched,
              price: cardInCollection.price?.usd,
              cn: cardInCollection.card.collectorNumber,
              modified: Intl.DateTimeFormat('en-US', {
                dateStyle: 'short',
                timeStyle: 'short',
              }).format(new Date(cardInCollection.updatedAt)),
              _images: cardInCollection.card.scryfallCard.imageUris,
            })),
          });
        } else {
          params.fail();
        }
      },
    };
  }, [fetchCards, props.collection]);

  const [columnDefs] = useState<ColDef[]>([
    { field: '#', width: 50, resizable: true, editable: true },
    { field: 'set', cellRenderer: MemoizedSetCellRenderer, width: 60 },
    {
      field: 'name',
      flex: 1,
      tooltipField: 'name',
    },
    {
      field: 'cn',
      valueFormatter: collectorNumberFormatter,
      width: 80,
    },
    { field: 'foil', cellRenderer: MemoizedCheckmarkCellRenderer, width: 60 },
    { field: 'etched', cellRenderer: MemoizedCheckmarkCellRenderer, width: 90 },
    {
      field: 'price',
      valueFormatter: priceFormatter,
      type: 'numericColumn',
      sortable: true,
    },
    { field: 'modified' },
    {
      field: 'mgmt',
      cellRenderer: MemoizedMgmtCellRenderer,
      width: 75,
      type: 'rightAligned',
    },
  ]);

  const onGridReady = useCallback(
    (params: GridReadyEvent) => {
      if (!ref.current) return;
      params.api.setServerSideDatasource(serverSideDatasource());
    },
    [serverSideDatasource],
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
        onGridReady={onGridReady}
        pagination
        paginationPageSize={50}
        cacheBlockSize={50}
        serverSideStoreType="partial"
      />
    </div>
  );
};
