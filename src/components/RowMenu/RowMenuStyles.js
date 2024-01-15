import styled from 'styled-components';
import { FlexColumn, FlexRow, Svg } from '../../utils/containers';

const backgroundColorHandle = (theme, rowChecked, disabled) => {
  if (rowChecked) {
    return theme.colors.greenStrong;
  }
  if (disabled) {
    return theme.colors.gray;
  }
  return theme.colors.white200;
};

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
  background-color: ${({ theme, rowChecked, disabled }) =>
    backgroundColorHandle(theme, rowChecked, disabled)};
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
`;

export { RowMenuStyle, RowMenuRowStyle, RowMenuIconStyle };
