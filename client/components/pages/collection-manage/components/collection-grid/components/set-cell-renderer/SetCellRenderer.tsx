import React from 'react';
import { SetIcon } from '../../../../../../set-icon';

type SetCellRendererProps = {
  value: {
    set: { iconSvgUri: string; name: string };
    rarity: string;
  };
};

export const SetCellRenderer: React.FC<SetCellRendererProps> = (props) => {
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
};
