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
import { useDispatch } from 'react-redux';
import { tableItemsCheckedUpdate } from '../../redux/tableDataSlice';

const RowMenu = ({ i, rowMenuOpen, setRowMenuHover }) => {
  const dispatch = useDispatch();
  const [rowChecked, setRowChecked] = React.useState(false);
  const iconSize = '18px';
  const freeSpaces = '6px';

  const checkRowHandle = (i) => {
    setRowChecked(!rowChecked);
    let value = true;
    if (rowChecked) value = false;
    dispatch(tableItemsCheckedUpdate({i: i, value: value}));
  }

  if (rowMenuOpen === `rowMenuOpen-${i}`) {
    return (
      <RowMenuStyle freeSpaces={freeSpaces} onMouseEnter={() => setRowMenuHover(true)} onMouseLeave={() => setRowMenuHover(false)}>
        <RowMenuRowStyle freeSpaces={freeSpaces}>
          <RowMenuIconStyle
            iconSize={iconSize}
            rowChecked={rowChecked}
            src={checkIco}
            onClick={() => checkRowHandle(i)}
          />
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
