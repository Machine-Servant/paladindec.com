import React from 'react';
import RoundSvg from '../../../../../../../assets/svg/icons8-round-50.svg';

export const ImageCellRenderer = (props: { value: string }) => {
  return (
    <div
      className="flex items-center justify-center h-full"
      title={props.value}
    >
      <RoundSvg className="w-4 h-4 stroke-2 stroke-green-500" />
    </div>
  );
};
