import React from 'react';
import { useSidebar } from '../../contexts/sidebar-context';
import { BasicLayout, BasicLayoutProps } from '../basic-layout';
import { Navbar } from '../navbar';
import { Sidebar } from '../sidebar';
import { Container, Main } from './AppLayout.styles';

export type AppLayoutProps = BasicLayoutProps;

export const AppLayout: React.FC<AppLayoutProps> = ({ children, ...props }) => {
  const { isOpen } = useSidebar();

  return (
    <BasicLayout
      {...props}
      className={`${props.className} w-screen h-screen relative overflow-y-scroll`}
    >
      <Container>
        <Sidebar />
        <Main sidebarHidden={!isOpen}>
          <Navbar />
          <div className="w-full h-screen pt-16">
            <div className="h-full p-4">{children}</div>
          </div>
        </Main>
      </Container>
    </BasicLayout>
  );
};
