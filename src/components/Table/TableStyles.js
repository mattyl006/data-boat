import styled from 'styled-components';
import { Container } from '../../utils/containers';

const TableStyle = styled(Container)``;

const ItemStyle = styled(Container)`
  position: relative;
  outline: none;
  height: 300px;
  border: 1px solid black;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.green};
  }
`;

export { TableStyle, ItemStyle };
