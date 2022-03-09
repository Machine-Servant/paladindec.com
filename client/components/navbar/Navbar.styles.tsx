import styled from '@emotion/styled';
import tw from 'twin.macro';

export const Container = styled.nav(tw`bg-blue-800`);

export const ContainerInner = styled.div(
  tw`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8`,
);

export const UserMenu = styled.div<{ isHidden: boolean }>`
  ${tw`absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white-500 bg-blue-600 rounded-md shadow-lg ring-1 ring-black-500 ring-opacity-5 focus:outline-none sm:bg-white-50`}
  ${({ isHidden }) => (isHidden ? tw`hidden` : tw``)}
`;

export const MobileNavMenu = styled.div<{ isHidden: boolean }>`
  ${tw`sm:hidden`}
  ${({ isHidden }) => (isHidden ? tw`hidden` : tw``)}
`;
