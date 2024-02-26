import styled from 'styled-components';
import { Grid } from '../../utils/containers';

const TableRowStyle = styled(Grid)`
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  /* display: ${({ visible }) => (visible ? 'grid' : 'none')}; */
  order: ${({ order }) => order};
  grid-template-columns: 1fr 2fr 1fr 6fr 1fr;
  width: 100%;
  position: relative;
  background-color: ${({ check, theme }) =>
    check ? theme.colors.greenLight : theme.colors.white};
`;

export default TableRowStyle;
