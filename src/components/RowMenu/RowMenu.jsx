import React from 'react';
import checkIco from '../../assets/check.svg';
import addRowIco from '../../assets/add_row.svg';
import dragRowIco from '../../assets/drag.svg';
import removeRowIco from '../../assets/remove_row.svg';
import {
  RowMenuStyle,
  RowMenuRowStyle,
  RowMenuIconStyle,
} from './RowMenuStyles';

const RowMenu = ({ i, rowMenuOpen }) => {
  const iconSize = '18px';
  const freeSpaces = '6px';
  if (rowMenuOpen === `rowMenuOpen-${i}`) {
    return (
      <RowMenuStyle freeSpaces={freeSpaces}>
        <RowMenuRowStyle freeSpaces={freeSpaces}>
          <RowMenuIconStyle iconSize={iconSize} src={checkIco} />
          <RowMenuIconStyle iconSize={iconSize} src={addRowIco} />
        </RowMenuRowStyle>
        <RowMenuRowStyle freeSpaces={freeSpaces}>
          <RowMenuIconStyle iconSize={iconSize} src={dragRowIco} />
          <RowMenuIconStyle iconSize={iconSize} src={removeRowIco} />
        </RowMenuRowStyle>
      </RowMenuStyle>
    );
  }
};

export default RowMenu;
