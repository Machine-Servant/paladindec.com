import React from 'react';
import { Head, HeadProps } from '../head';

export type BasicLayoutProps = HeadProps & {
  className?: string;
  loading?: boolean;
};

export const BasicLayout: React.FC<BasicLayoutProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <>
      <Head {...props} />
      <main className={className}>
        {props.loading ? <div>LOADING</div> : children}
      </main>
    </>
  );
};
