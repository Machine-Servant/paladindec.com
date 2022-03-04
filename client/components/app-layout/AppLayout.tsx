import React from 'react';
import { BasicLayout, BasicLayoutProps } from '../basic-layout';
import { Navbar } from '../navbar';

type AppLayoutProps = BasicLayoutProps & {};

export const AppLayout: React.FC<AppLayoutProps> = ({ children, ...props }) => (
  <BasicLayout {...props}>
    <Navbar />
    {children}
  </BasicLayout>
);
