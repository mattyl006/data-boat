import styled from 'styled-components';
import { Container } from '../../utils/containers';

const TableStyle = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export default TableStyle;
