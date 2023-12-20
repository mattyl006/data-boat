import React from 'react';
import TableRowStyle from './TableRowStyle';
import { useSelector } from 'react-redux';
import RowMenu from '../RowMenu';
import TableItem from '../TableItem';
import { useDispatch } from 'react-redux';
import {
  tableOpenMenuRowUpdate,
  tableRowsSwap,
} from '../../redux/tableDataSlice';

const TableRow = ({ i, row, bboxIds, tableRowDrop, setTableRowDrop}) => {
  const dispatch = useDispatch();
  const itemsChecked = useSelector((state) => state.tableData.tableRowsChecked);
  const [rowMenuHover, setRowMenuHover] = React.useState(false);
  const [rowDraggable, setRowDraggable] = React.useState(false);

  const handleOnDrag = (e, i, row) => {
    setTableRowDrop({ row: row, index: i });
  };

  const handleOnDrop = (e, currentRowIndex) => {
    if (tableRowDrop) {
      const { row, index } = tableRowDrop;
      dispatch(
        tableRowsSwap({
          droppedRow: row,
          droppedRowIndex: index,
          currentRowIndex: currentRowIndex,
        })
      );
      setTableRowDrop(null)
    }
  };

  return (
    <TableRowStyle
      id={`row-${bboxIds}`}
      key={`row-${i}`}
      onClick={() => dispatch(tableOpenMenuRowUpdate({ i: i, value: true }))}
      onBlur={() => {
        if (!rowMenuHover)
          dispatch(tableOpenMenuRowUpdate({ i: i, value: false }));
      }}
      check={itemsChecked[i]}
      draggable={rowDraggable}
      onDragStart={(e) => handleOnDrag(e, i, row)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => handleOnDrop(e, i)}
    >
      {Object.entries(row).map((item, j) => {
        return (
          <TableItem
            key={`item-${i}-${j}`}
            i={i}
            j={j}
            item={item}
            bboxIds={bboxIds}
          />
        );
      })}
      <RowMenu
        i={i}
        setRowMenuHover={setRowMenuHover}
        setRowDraggable={setRowDraggable}
      />
    </TableRowStyle>
  );
};

export default TableRow;
