import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { NavLinkInner } from './NavLink.styles';

export const NavLink: React.FC<LinkProps> = (props) => {
  const { pathname } = useRouter();
  const isCurrent = pathname === props.href;
  return (
    <Link {...props} aria-current={isCurrent ? 'page' : undefined}>
      <NavLinkInner isCurrent={isCurrent}>{props.children}</NavLinkInner>
    </Link>
  );
};
