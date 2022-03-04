import React from 'react';
import NextHead from 'next/head';

export type HeadProps = {
  title?: string;
  description?: string;
};

export const Head: React.FC<HeadProps> = (props) => (
  <NextHead>
    <title>PaladinDeck | {props.title}</title>
    <meta name="description" content={props.description} />
    <link rel="icon" href="/favicon.ico" />
    {props.children}
  </NextHead>
);
