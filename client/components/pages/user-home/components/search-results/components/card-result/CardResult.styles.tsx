import styled from '@emotion/styled';
import tw from 'twin.macro';

export const Container = styled.li<{ isLoading: boolean }>`
  ${tw`w-full p-4 mx-auto mb-2 border shadow-2xl last:mb-0 sm:max-w-4xl sm:rounded-lg border-white-900 `};
  ${({ isLoading }) => (isLoading ? tw`bg-blue-50` : tw`bg-auto`)}
`;

export const FinishSelect = styled.button<{ active?: boolean }>`
  ${tw`w-20 px-2 py-1 mr-2 border rounded-lg border-white-900 last:mr-0 disabled:opacity-30`}
  ${({ active }) =>
    active ? tw`border-green-900 bg-green-50 text-white-50` : tw`bg-white-500`};
`;
