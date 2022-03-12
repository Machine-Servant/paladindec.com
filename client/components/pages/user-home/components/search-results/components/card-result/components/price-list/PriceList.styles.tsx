import styled from '@emotion/styled';
import tw from 'twin.macro';

export const PriceRow = styled.div<{ isDisabled: boolean }>`
  > div {
    ${tw`first-of-type:w-20 first-of-type:mr-2 last-of-type:ml-2`}
  }
  ${({ isDisabled }) => (isDisabled ? tw`opacity-25` : tw``)}
`;
