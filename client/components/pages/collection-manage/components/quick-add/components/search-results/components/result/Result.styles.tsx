import styled from '@emotion/styled';
import tw from 'twin.macro';
import RoundIcon from '../../../../../../../../../assets/svg/icons8-round-50.svg';

export const Round = styled(RoundIcon)<{ isActive?: boolean }>`
  ${({ isActive }) => (isActive ? tw`opacity-100` : tw`opacity-10`)}
`;
