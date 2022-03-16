import React, { useState } from 'react';
import { BasicLayout, BasicLayoutProps } from '../basic-layout';
import { Navbar } from '../navbar';
import { Sidebar } from '../sidebar';
import { Container, Main } from './AppLayout.styles';

export type AppLayoutProps = BasicLayoutProps;

export const AppLayout: React.FC<AppLayoutProps> = ({ children, ...props }) => {
  const [isSidebarHidden, setIsSidebarHidden] = useState<boolean>(true);

  return (
    <BasicLayout
      {...props}
      className={`${props.className} w-screen h-screen relative overflow-y-scroll`}
    >
      <Container>
        <Sidebar
          isHidden={isSidebarHidden}
          onHamburgerIconClick={() => setIsSidebarHidden((current) => !current)}
        />
        <Main sidebarHidden={isSidebarHidden}>
          <Navbar
            onHamburgerIconClick={() =>
              setIsSidebarHidden((current) => !current)
            }
          />
          <div className="w-full h-screen pt-16">
            <div className="h-full p-4">{children}</div>
          </div>
        </Main>
      </Container>
    </BasicLayout>
  );
};
