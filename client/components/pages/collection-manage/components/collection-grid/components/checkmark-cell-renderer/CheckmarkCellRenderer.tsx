import CheckMark from '../../../../../../../assets/svg/icons8-done-50.svg';

export const CheckmarkCellRenderer = (props: { value: boolean }) => {
  return props.value ? (
    <div className="flex items-center justify-center h-full">
      <CheckMark className="w-6 h-6 stroke-2 stroke-green-500" />
    </div>
  ) : null;
};
