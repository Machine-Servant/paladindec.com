import React from 'react';
import { Head, HeadProps } from '../head';

export type BasicLayoutProps = HeadProps & {
  loading?: boolean;
};

export const BasicLayout: React.FC<BasicLayoutProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <Head {...props} />
      <main>{props.loading ? <text>LOADING</text> : children}</main>
    </>
  );
};
