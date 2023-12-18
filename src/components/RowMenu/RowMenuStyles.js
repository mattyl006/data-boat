import styled from 'styled-components';
import { FlexColumn, FlexRow, Svg } from '../../utils/containers';

const RowMenuStyle = styled(FlexColumn)`
  padding: ${({ freeSpaces }) => freeSpaces};
  gap: ${({ freeSpaces }) => freeSpaces};
  background-color: ${({ theme }) => theme.colors.blue};
  position: absolute;
  top: 0;
  right: -54px;
`;

const RowMenuRowStyle = styled(FlexRow)`
  gap: ${({ freeSpaces }) => freeSpaces};
`;

const RowMenuIconStyle = styled(Svg)`
  width: ${({ iconSize }) => iconSize};
  height: ${({ iconSize }) => iconSize};
  background-color: ${({ theme }) => theme.colors.white200};
  cursor: pointer;
`;

export { RowMenuStyle, RowMenuRowStyle, RowMenuIconStyle };
