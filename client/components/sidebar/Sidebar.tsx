import Image from 'next/image';
import Link from 'next/link';
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
              <Link href="/user-home" passHref>
                <NavLink>D</NavLink>
              </Link>
              <Link href="/collections" passHref>
                <NavLink>C</NavLink>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-end px-4">
              <Link href="/user-home" passHref>
                <NavLink>Dashboard</NavLink>
              </Link>
              <Link href="/collections" passHref>
                <NavLink>Collections</NavLink>
              </Link>
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="px-4 py-8 border-t border-white-900">
          <div className="flex flex-col items-start justify-between mb-4">
            <div className="relative w-8 h-8 overflow-hidden border border-green-800 rounded-full">
              {user?.photoURL && (
                <Image
                  src={user?.photoURL}
                  alt={user?.email || ''}
                  layout="fill"
                />
              )}
            </div>
            <h3 className="w-full font-bold truncate whitespace-nowrap">
              {user?.email} asdf sda sdfa
            </h3>
          </div>
          <button onClick={() => auth.signOut()}>Sign out</button>
        </div>
      )}
    </Container>
  );
};
