import React from 'react';
import theme from '../../utils/theme';
import shipImage from '../../assets/ship.svg';
import { Svg } from '../../utils/containers';
import { Body } from '../../utils/fonts';
import NavbarStyle from './NavbarStyle';

const NavBar = () => {
  return (
    <NavbarStyle>
      <Svg
        backgroundColor={theme.colors.white}
        src={shipImage}
        size="cover"
        width="44px"
        height="44px"
      />
      <Body
        padding="6px 16px"
        color={theme.colors.white}
        borderRadius="8px"
        border={`1px solid ${theme.colors.white}`}
      >
        AI document generator
      </Body>
    </NavbarStyle>
  );
};

export default NavBar;
