import React from 'react';
import { PriceRow } from './PriceList.styles';

type PriceListProps = {
  usd?: number | null;
  usdFoil?: number | null;
  usdEtched?: number | null;
};

const dollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

export const PriceList: React.FC<PriceListProps> = (props) => {
  console.log(props.usdFoil);
  return (
    <div className="flex flex-col max-w-fit">
      <PriceRow
        isDisabled={!props.usd}
        className="flex flex-row items-center justify-between"
      >
        <div>Non-foil</div>
        <div>{props.usd ? dollar.format(props.usd) : 'N/A'}</div>
      </PriceRow>
      <PriceRow
        isDisabled={!props.usdFoil}
        className="flex flex-row items-center justify-between"
      >
        <div>Foil</div>
        <div>{props.usdFoil ? dollar.format(props.usdFoil) : 'N/A'}</div>
      </PriceRow>
      <PriceRow
        isDisabled={!props.usdEtched}
        className="flex flex-row items-center justify-between"
      >
        <div>Etched</div>
        <div>{props.usdEtched ? dollar.format(props.usdEtched) : 'N/A'}</div>
      </PriceRow>
    </div>
  );
};
