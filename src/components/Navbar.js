import React from 'react';
import { FlexRow } from '../utils/containers';
import theme from '../utils/theme';
import shipImage from '../assets/ship.svg';
import { Svg } from '../utils/containers';
import { Body } from '../utils/fonts';

const NavBar = ({ setOpenFormatter }) => {
  return (
    <FlexRow
      width="100%"
      height="60px"
      position="fixed"
      padding="8px 60px"
      alignmentX="space-between"
      top="0"
      zIndex="10"
      left="0"
      backgroundColor={theme.colors.black}
    >
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
    </FlexRow>
  );
};

export default NavBar;
