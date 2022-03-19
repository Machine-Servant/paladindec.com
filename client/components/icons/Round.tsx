import styled from '@emotion/styled';
import tw from 'twin.macro';
import RoundSvg from '../../assets/svg/icons8-round-50.svg';

export const Round = styled(RoundSvg)<{ active?: boolean }>`
  ${({ active }) => (active ? tw`opacity-100` : tw`opacity-10`)}
`;
