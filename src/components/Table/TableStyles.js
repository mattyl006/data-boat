import styled from 'styled-components';
import { Container } from '../../utils/containers';

const TableStyle = styled(Container)``;

const ItemStyle = styled(Container)`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 2px;
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
    height: 2px;
    background-color: black;
  }
`;

export { TableStyle, ItemStyle };
