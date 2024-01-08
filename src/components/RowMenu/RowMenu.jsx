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
import { useDispatch, useSelector } from 'react-redux';
import {
  tableRowsCheckedUpdate,
  tableDataAddNewRow,
  tableDataDeleteRow,
} from '../../redux/tableDataSlice';
import { TIMEOUT_VALUE } from '../../utils/globals';

const RowMenu = ({ i, setRowMenuHover, handleOnDrag, setTableLoading }) => {
  const dispatch = useDispatch();
  const rowMenuOpen = useSelector((state) => state.tableData.tableOpenMenuRow);
  const rowsChecked = useSelector((state) => state.tableData.tableRowsChecked);
  const [rowChecked, setRowChecked] = React.useState(false);

  const iconSize = '18px';
  const freeSpaces = '6px';

  const checkRowHandle = (i) => {
    setRowChecked(!rowChecked);
    let value = true;
    if (rowChecked) value = false;
    dispatch(tableRowsCheckedUpdate({ i: i, value: value }));
  };

  const addRowHandle = (i) => {
    setTableLoading(true);
    setTimeout(() => {
      dispatch(tableDataAddNewRow({ row: i }));
    }, TIMEOUT_VALUE);
  };

  if (rowMenuOpen[i]) {
    return (
      <RowMenuStyle
        freeSpaces={freeSpaces}
        onMouseEnter={() => setRowMenuHover(true)}
        onMouseLeave={() => setRowMenuHover(false)}
      >
        <RowMenuRowStyle freeSpaces={freeSpaces}>
          <RowMenuIconStyle
            iconSize={iconSize}
            rowChecked={rowsChecked[i]}
            src={checkIco}
            onClick={() => checkRowHandle(i)}
          />
          <RowMenuIconStyle
            iconSize={iconSize}
            src={addRowIco}
            onClick={() => addRowHandle(i)}
          />
        </RowMenuRowStyle>
        <RowMenuRowStyle freeSpaces={freeSpaces}>
          <RowMenuIconStyle
            iconSize={iconSize}
            src={dragRowIco}
            onClick={() => handleOnDrag()}
          />
          <RowMenuIconStyle
            iconSize={iconSize}
            src={removeRowIco}
            onClick={() => {
              setTableLoading(true);
              setTimeout(() => {
                dispatch(tableDataDeleteRow({ row: i }));
              }, TIMEOUT_VALUE);
            }}
          />
        </RowMenuRowStyle>
      </RowMenuStyle>
    );
  }
};

export default RowMenu;
