import React from 'react';
import {
  CommonSetIcon,
  MythicSetIcon,
  RareSetIcon,
  UncommonSetIcon,
} from './SetIcon.styles';

type SetIconProps = React.DetailsHTMLAttributes<HTMLDivElement> & {
  rarity?: 'common' | 'uncommon' | 'rare' | 'mythic' | string;
  src: string;
};

export const SetIcon: React.FC<SetIconProps> = ({ rarity, ...props }) => {
  switch (rarity) {
    case 'uncommon':
      return <UncommonSetIcon {...props} />;
    case 'rare':
      return <RareSetIcon {...props} />;
    case 'mythic':
      return <MythicSetIcon {...props} />;
    default:
      return <CommonSetIcon {...props} />;
  }
};
