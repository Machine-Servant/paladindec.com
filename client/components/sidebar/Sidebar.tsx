import Image from 'next/image';
import React from 'react';
import { auth } from '../../app/firebase.app';
import { useAuth } from '../../hooks/useAuth';
import { HamburgerButton } from '../hamburger-button';
import { Container, NavLink } from './Sidebar.styles';

type SidebarProps = {
  onHamburgerIconClick: () => void;
  isHidden?: boolean;
};

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { user } = useAuth();
  return (
    <Container isHidden={!!props.isHidden}>
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-around h-16 px-2 border-b border-white-900">
          {!props.isHidden && <div>PaladinDeck</div>}
          <HamburgerButton
            className="hidden sm:block"
            onClick={props.onHamburgerIconClick}
          />
        </div>
        <div className="mt-4">
          {props.isHidden ? (
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
      {!props.isHidden && (
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
