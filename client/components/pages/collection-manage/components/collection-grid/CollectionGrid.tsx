import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import Image from 'next/image';
import React, { memo, useMemo, useState } from 'react';
import { CollectionManageQuery } from '../../../../../@types/codegen/graphql';
import CheckMark from '../../../../../assets/svg/icons8-done-50.svg';
import Edit from '../../../../../assets/svg/icons8-edit-50.svg';
import Trash from '../../../../../assets/svg/icons8-trash-50.svg';
import { SetIcon } from '../../../../set-icon';

const ImageTooltip: React.FC<{
  data: { _images: Record<string, string>; name: string };
}> = (props) => {
  if (!props.data._images) return null;
  return (
    <div className="relative w-40 h-64 -mt-6">
      <Image
        src={props.data._images.normal}
        alt={props.data.name}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

type CollectionGridProps = {
  cardsInCollection: CollectionManageQuery['collection']['cards'];
};

type RowDataProps = {
  '#': number;
  name: string;
  foil: boolean;
  etched: boolean;
  price: number;
  set: { set: unknown; rarity: string };
  modified: string;
};

const dollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

const getCurrentPriceForCardInCollection = (
  cardInCollection: CollectionManageQuery['collection']['cards'][0],
): number => {
  if (cardInCollection.isEtched)
    return cardInCollection.card.currentPrice.usdEtched || 0;
  if (cardInCollection.isFoil)
    return cardInCollection.card.currentPrice.usdFoil || 0;
  return cardInCollection.card.currentPrice.usd || 0;
};

export const CollectionGrid: React.FC<CollectionGridProps> = (props) => {
  // eslint-disable-next-line react/display-name
  const SetCellRenderer = memo(
    (props: {
      value: {
        set: CollectionGridProps['cardsInCollection'][0]['card']['scryfallCard']['set'];
        rarity: string;
      };
    }) => {
      return (
        <div className="flex items-center justify-start h-full">
          <SetIcon
            className="w-6 h-6"
            src={props.value.set.iconSvgUri}
            rarity={props.value.rarity}
            title={props.value.set.name}
          />
        </div>
      );
    },
  );

  // eslint-disable-next-line react/display-name
  const CheckMarkCellRenderer = memo((props: { value: boolean }) => {
    return props.value ? (
      <div className="flex items-center justify-center h-full">
        <CheckMark className="w-6 h-6 stroke-2 stroke-green-500" />
      </div>
    ) : null;
  });

  // eslint-disable-next-line react/display-name
  const MgmtCellRenderer = memo(() => {
    return (
      <div className="flex flex-row items-center justify-end h-full">
        <button className="mr-2">
          <Edit className="w-6 h-6 hover:stroke-green-50" />
        </button>
        <button>
          <Trash className="w-6 h-6 hover:stroke-red-50" />
        </button>
      </div>
    );
  });

  const [columnDefs] = useState<ColDef[]>([
    { field: '#', width: 50, resizable: true, editable: true },
    { field: 'set', cellRenderer: SetCellRenderer, width: 60 },
    {
      field: 'name',
      flex: 1,
      tooltipField: 'name',
    },
    {
      field: 'cn',
      valueFormatter: (params) => `(${params.value})`,
      width: 80,
    },
    { field: 'foil', cellRenderer: CheckMarkCellRenderer, width: 60 },
    { field: 'etched', cellRenderer: CheckMarkCellRenderer, width: 90 },
    {
      field: 'price',
      valueFormatter: (params) => dollar.format(params.value),
      type: 'numericColumn',
    },
    { field: 'modified' },
    {
      field: 'mgmt',
      cellRenderer: MgmtCellRenderer,
      width: 75,
      type: 'rightAligned',
    },
  ]);

  const rowData = useMemo<RowDataProps[]>(() => {
    return props.cardsInCollection.map((cardInCollection) => ({
      '#': cardInCollection.count,
      set: {
        set: cardInCollection.card.scryfallCard.set,
        rarity: cardInCollection.card.scryfallCard.rarity,
      },
      name: cardInCollection.card.name,
      foil: cardInCollection.isFoil,
      etched: cardInCollection.isEtched,
      price: getCurrentPriceForCardInCollection(cardInCollection),
      cn: cardInCollection.card.collectorNumber,
      modified: Intl.DateTimeFormat('en-US', {
        dateStyle: 'short',
        timeStyle: 'short',
      }).format(new Date(cardInCollection.updatedAt)),
      _images: cardInCollection.card.scryfallCard.imageUris,
    }));
  }, [props.cardsInCollection]);

  return (
    <div className="w-full h-full mx-auto ag-theme-alpine">
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{ tooltipComponent: ImageTooltip }}
        tooltipShowDelay={100}
        suppressCellFocus
      />
    </div>
  );
};
