import styled from '@emotion/styled';
import Link, { LinkProps } from 'next/link';
import tw from 'twin.macro';

export const NavLinkInner = styled.a<{ isCurrent: boolean }>`
  ${({ isCurrent }) => (isCurrent ? tw`text-white-500` : tw`text-white-800`)};
  ${tw`px-3 py-2 rounded-md text-sm font-medium`}
`;
