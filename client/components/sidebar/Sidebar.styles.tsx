import styled from '@emotion/styled';
import tw from 'twin.macro';

export const Container = styled.div<{ isHidden: boolean }>`
  ${tw`fixed flex flex-col justify-between h-full overflow-x-hidden border-r border-white-900`}
  ${({ isHidden }) => (isHidden ? tw`w-0 sm:w-16` : tw`w-64`)}
`;

export const NavLink = styled.span`
  ${tw`mb-3 text-xl cursor-pointer hover:underline`}
`;
