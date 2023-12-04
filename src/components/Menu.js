import React from 'react';
import { FlexColumn, Svg } from '../utils/containers';
import styled from 'styled-components';
import theme from '../utils/theme';
import resetIco from '../assets/reset.svg';
import zoomInIco from '../assets/zoomIn.svg';
import zoomOutIco from '../assets/zoomOut.svg';

const MenuStyle = styled(FlexColumn)`
  background: linear-gradient(180deg, #2c95d8 0%, #18356d 91.15%);
  padding: 14px 0;
  width: 60px;
  height: 100%;
  gap: 28px;
  justify-content: flex-start;
  z-index: 2;
`;

const Menu = ({ icons }) => {
  return (
    <MenuStyle>
      <Svg
        src={zoomInIco}
        width="20px"
        height="20px"
        backgroundColor={theme.colors.white}
        onClick={() => console.log('zoomIn')}
      />
      <Svg
        src={zoomOutIco}
        width="20px"
        height="20px"
        backgroundColor={theme.colors.white}
        onClick={() => console.log('zoomOut')}
      />
      <Svg
        src={resetIco}
        width="20px"
        height="20px"
        backgroundColor={theme.colors.white}
        onClick={() => console.log('reset')}
      />
    </MenuStyle>
  );
};

export default Menu;
