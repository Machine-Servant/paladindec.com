import { ICellRendererParams } from '@ag-grid-community/core';
import { PaginatedCardsInCollectionQuery } from '../../../../../../../@types/codegen/graphql';
import Trash from '../../../../../../../assets/svg/icons8-trash-50.svg';

export const MgmtCellRenderer: React.FC<
  ICellRendererParams & {
    onDeleteClick: (
      cardInCollection: PaginatedCardsInCollectionQuery['collection']['cards'][0],
      nodeId?: string,
    ) => void;
  }
> = (params) => {
  return (
    <div className="flex flex-row items-center justify-end h-full">
      <button
        onClick={() =>
          params.onDeleteClick(params.value.cardInCollection, params.node.id)
        }
      >
        <Trash className="w-6 h-6 hover:stroke-red-50" />
      </button>
    </div>
  );
};
