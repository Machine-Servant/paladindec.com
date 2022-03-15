import Image from 'next/image';
import React from 'react';

export const ImageTooltip: React.FC<{
  data: { _images: Record<string, string>; name: string };
}> = (props) => {
  if (!props.data._images) return null;
  return (
    <div className="relative w-64 -mt-6 h-80">
      <Image
        src={props.data._images.normal}
        alt={props.data.name}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};
