import styled from 'styled-components';
import { Container, Grid } from '../../utils/containers';

const TableStyle = styled(Container)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

const RowStyle = styled(Grid)`
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* grid-template-columns: 1fr 2fr 1fr 6fr; */
  width: 100%;
  position: relative;
  background-color: ${({ check, theme }) =>
    check ? theme.colors.greenLight : theme.colors.white};
`;

const ItemStyle = styled(Container)`
  position: relative;
  outline: none;
  height: 300px;
  border: 1px solid black;
  padding: 14px 8px;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.black};

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.green};
  }
`;

export { TableStyle, ItemStyle, RowStyle };
