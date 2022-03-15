import Edit from '../../../../../../../assets/svg/icons8-edit-50.svg';
import Trash from '../../../../../../../assets/svg/icons8-trash-50.svg';

export const MgmtCellRenderer = () => {
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
};
