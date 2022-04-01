import React from 'react';
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ScryfallPrice } from '../../@types/codegen/graphql';
import { dollar } from '../../utils/dollar';

type PricePoint = Pick<ScryfallPrice, 'date' | 'usd' | 'usdEtched' | 'usdFoil'>;

type PriceGraphProps = {
  data: PricePoint[];
  canBeFoil: boolean;
  canBeEtched: boolean;
  canBeNonFoil: boolean;
};

export const PriceGraph: React.FC<PriceGraphProps> = (props) => {
  const dateFormatter = Intl.DateTimeFormat('en-US', { dateStyle: 'short' });
  return (
    <ResponsiveContainer>
      <LineChart
        data={props.data}
        margin={{ left: 40, right: 40, top: 40, bottom: 40 }}
      >
        {props.canBeNonFoil && (
          <Line
            type="monotone"
            dataKey="usd"
            stroke="#8884d8"
            name="usd"
            strokeWidth={2}
          />
        )}
        {props.canBeEtched && (
          <Line
            type="monotone"
            dataKey="usdEtched"
            stroke="green"
            strokeWidth={2}
            name="usd (etched)"
          />
        )}
        {props.canBeFoil && (
          <Line
            type="monotone"
            dataKey="usdFoil"
            stroke="red"
            strokeWidth={2}
            name="usd (foil)"
          />
        )}
        <YAxis
          tickFormatter={(value) => dollar.format(value)}
          fontWeight="bold"
          tickMargin={10}
        />
        <XAxis
          tickFormatter={(value: Date) => dateFormatter.format(value)}
          dataKey="date"
          tickMargin={10}
          fontWeight="bold"
        />
        <Tooltip
          formatter={(value: number) => dollar.format(value)}
          labelFormatter={(label: Date) => dateFormatter.format(label)}
        />
        <Legend verticalAlign="top" />
      </LineChart>
    </ResponsiveContainer>
  );
};
