import styled from '@emotion/styled';
import tw from 'twin.macro';

export const SwitchButton = styled.button<{ isActive?: boolean }>`
  ${tw`w-20 px-2 py-1 mr-2 border rounded-full border-white-900 disabled:opacity-50`}
  ${({ isActive }) =>
    isActive
      ? tw`border-green-900 bg-green-50 text-white-50`
      : tw`bg-white-500`}
`;
