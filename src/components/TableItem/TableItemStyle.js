import styled from 'styled-components';
import { Container } from '../../utils/containers';

const TableItemStyle = styled(Container)`
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

export default TableItemStyle;
