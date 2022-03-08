import React from 'react';
import { BasicLayout, BasicLayoutProps } from '../basic-layout';
import { Navbar } from '../navbar';

type AppLayoutProps = BasicLayoutProps;

export const AppLayout: React.FC<AppLayoutProps> = ({ children, ...props }) => (
  <BasicLayout {...props}>
    <Navbar />
    <div className="px-2 py-8 sm:max-w-7xl sm:mx-auto sm:px-6 lg:px-8">
      {children}
    </div>
  </BasicLayout>
);
