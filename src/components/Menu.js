import React from 'react';
import { FlexColumn, Svg } from '../utils/containers';
import styled from 'styled-components';
import theme from '../utils/theme';

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
      {icons?.map((icon) => {
        return (
          <Svg
            src={icon.src}
            as={icon.as}
            href={icon.href}
            download={icon.download}
            width="20px"
            height="20px"
            backgroundColor={
              icon.disabled ? theme.colors.gray : theme.colors.white
            }
            cursor={icon.disabled ? 'auto' : 'pointer'}
            onClick={icon.handler}
          />
        );
      })}
    </MenuStyle>
  );
};

export default Menu;
