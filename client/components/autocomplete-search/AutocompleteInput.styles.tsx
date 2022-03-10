import styled from '@emotion/styled';
import tw from 'twin.macro';

export const ResultsContainer = styled.div<{ isHidden: boolean }>`
  ${tw`left-0 z-10 w-full border shadow-xl border-black-50 top-12 bg-white-50`}
  ${({ isHidden }) => (isHidden ? tw`hidden` : tw`absolute`)}
`;

export const Item = styled.li<{ isActive?: boolean }>`
  ${tw`border-b cursor-pointer border-white-800 last:border-0 hover:bg-white-600`}
  ${({ isActive }) => (isActive ? tw`bg-blue-50 text-white-50` : tw`bg-auto`)}
`;
