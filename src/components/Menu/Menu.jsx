import React from 'react';
import { Svg } from '../../utils/containers';
import theme from '../../utils/theme';
import MenuStyle from './MenuStyle';
import Pager from '../Pager/Pager';
import { useSelector } from 'react-redux';

const Menu = ({ icons }) => {
  const twoScreens = useSelector((state) => state.synchronize.twoScreens);

  return (
    <MenuStyle twoScreens={twoScreens}>
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
      <Pager />
    </MenuStyle>
  );
};

export default Menu;
