import styled from 'styled-components';
import { FlexColumn } from '../../utils/containers';

const MenuStyle = styled(FlexColumn)`
  background: linear-gradient(180deg, #2c95d8 0%, #18356d 91.15%);
  padding: 14px 0;
  width: 60px;
  height: 100%;
  gap: 28px;
  justify-content: flex-start;
  z-index: 2;
`;

export default MenuStyle;
