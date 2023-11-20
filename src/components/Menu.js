import React from 'react';
import { FlexColumn, Svg } from '../utils/containers';
import styled from 'styled-components';
import theme from '../utils/theme';

const MenuStyle = styled(FlexColumn)`
  background: linear-gradient(180deg, #2c95d8 0%, #18356d 91.15%);
  width: 60px;
  height: 100%;
  gap: 14px;
`;

const Menu = ({ icons }) => {
  return (
    <MenuStyle>
      {icons?.map((icon) => {
        return (
          <Svg
            src={icon}
            width="20px"
            height="20px"
            backgroundColor={theme.colors.white}
          />
        );
      })}
    </MenuStyle>
  );
};

export default Menu;
