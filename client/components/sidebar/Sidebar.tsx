import Image from 'next/image';
import React from 'react';
import { auth } from '../../app/firebase.app';
import { useSidebar } from '../../contexts/sidebar-context';
import { useAuth } from '../../hooks/useAuth';
import { HamburgerButton } from '../hamburger-button';
import { Container, NavLink } from './Sidebar.styles';

export const Sidebar: React.FC = () => {
  const { isOpen, setSidebarIsOpen } = useSidebar();
  const { user } = useAuth();
  return (
    <Container isHidden={!isOpen}>
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-around h-16 px-2 border-b border-white-900">
          {isOpen && <div>PaladinDeck</div>}
          <HamburgerButton
            className="hidden sm:block"
            onClick={() => setSidebarIsOpen(!isOpen)}
          />
        </div>
        <div className="mt-4">
          {!isOpen ? (
            <div className="flex flex-col items-center">
              <NavLink href="/user-home" isCurrent>
                D
              </NavLink>
              <NavLink href="/collections">C</NavLink>
            </div>
          ) : (
            <div className="flex flex-col items-end px-4">
              <NavLink href="/user-home" isCurrent>
                Dashboard
              </NavLink>
              <NavLink href="/collections">Collections</NavLink>
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="px-4 py-8 border-t border-white-900">
          <div className="flex flex-row items-center justify-between">
            <h3 className="font-bold">{user?.email}</h3>
            <div className="relative w-8 h-8 overflow-hidden border border-green-800 rounded-full">
              {user?.photoURL && (
                <Image
                  src={user?.photoURL}
                  alt={user?.email || ''}
                  layout="fill"
                />
              )}
            </div>
          </div>
          <button onClick={() => auth.signOut()}>Sign out</button>
        </div>
      )}
    </Container>
  );
};
