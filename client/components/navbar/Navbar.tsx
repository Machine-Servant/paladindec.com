import React from 'react';
import { useSidebar } from '../../contexts/sidebar-context';
import { HamburgerButton } from '../hamburger-button';
import { Container } from './Navbar.styles';

export const Navbar: React.FC = () => {
  const { isOpen, setSidebarIsOpen } = useSidebar();
  return (
    <Container>
      <div className="flex items-center justify-center w-16 h-full sm:justify-between">
        <div className="flex items-center sm:hidden">
          <HamburgerButton onClick={() => setSidebarIsOpen(!isOpen)} />
        </div>
      </div>
    </Container>
  );
};
