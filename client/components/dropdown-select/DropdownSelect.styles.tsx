import styled from '@emotion/styled';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`relative border rounded-lg border-white-900`}
`;

export const Display = styled.div`
  ${tw`flex flex-row items-center flex-1 h-full ml-2 overflow-hidden`}
`;

export const DropdownButton = styled.button<{ active?: boolean }>`
  ${tw`flex flex-row items-center justify-center h-full px-3 border-l border-white-900`}
`;

export const SelectItems = styled.div`
  ${tw`absolute z-10 w-full py-1 overflow-y-auto border shadow-lg max-h-40 bg-white-50 border-white-900`}
`;

export const Item = styled.div<{ active?: boolean }>`
  ${tw`w-full pr-4 cursor-pointer hover:bg-white-500 first-of-type:pt-0 last-of-type:pb-0 focus:bg-blue-50 focus:text-white-50`}
`;
