import React from 'react';
import { Svg } from '../../utils/containers';
import theme from '../../utils/theme';
import MenuStyle from './MenuStyle';

const Menu = ({ icons }) => {
  return (
    <MenuStyle>
      {icons?.map((icon, i) => {
        return (
          <Svg
            key={`icon-${i}`}
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
