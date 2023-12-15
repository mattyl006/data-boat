import styled from 'styled-components';
import { FlexRow } from '../../utils/containers';

const NavbarStyle = styled(FlexRow)`
  width: 100%;
  height: 60px;
  position: fixed;
  padding: 8px 60px;
  justify-content: space-between;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.black};
`;

export default NavbarStyle;
