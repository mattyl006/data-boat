import styled from 'styled-components';
import { Container } from '../../utils/containers';

const TableStyle = styled(Container)``;

const ItemStyle = styled(Container)`
  position: relative;
  outline: none;
  height: 300px;
  border: 1px solid black;

  /* &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 1px;
    height: calc(100% + 2px);
    background-color: black;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: calc(100% + 2px);
    height: 1px;
    background-color: black;
  } */

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.green};
  }
`;

export { TableStyle, ItemStyle };
