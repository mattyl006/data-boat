import styled from 'styled-components';
import { Container } from '../../utils/containers';

const TableItemStyle = styled(Container)`
  position: relative;
  outline: none;
  min-height: 200px;
  height: ${({ lines }) => `${lines * 25}px`};
  max-height: 1000px;
  border: 1px solid black;
  padding: 14px 8px;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.black};

  &:focus {
    border: 2px solid ${({ theme }) => 'rgb(4, 170, 109)'};
  }
`;

export default TableItemStyle;
