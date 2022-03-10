import styled from '@emotion/styled';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`relative flex flex-row w-full h-full overflow-y-scroll`}
`;

export const Main = styled.div<{ sidebarHidden?: boolean }>`
  ${tw`relative sm:flex-1`}
  ${({ sidebarHidden }) => (sidebarHidden ? tw`ml-0 sm:ml-16` : tw`ml-64`)}
`;
