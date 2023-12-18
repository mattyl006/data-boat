import styled from 'styled-components';
import { Container } from '../../utils/containers';

const TableStyle = styled(Container)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export default TableStyle;
