import React from 'react';
import theme from '../../utils/theme';
import shipImage from '../../assets/ship.svg';
import { Svg } from '../../utils/containers';
import { Body } from '../../utils/fonts';
import NavbarStyle from './NavbarStyle';

const NavBar = ({ setOpenFormatter }) => {
  return (
    <NavbarStyle>
      <Svg
        backgroundColor={theme.colors.white}
        src={shipImage}
        size="cover"
        width="44px"
        height="44px"
        cursor="pointer"
        onClick={() => setOpenFormatter(false)}
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
