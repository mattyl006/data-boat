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
import EntireScreenLoading from '../EntireScreenLoading';

const TableRow = ({ i, row, bboxIds, tableRowDrop, setTableRowDrop }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.tableData.tableData);
  const itemsChecked = useSelector((state) => state.tableData.tableRowsChecked);
  const [rowMenuHover, setRowMenuHover] = React.useState(false);
  const [rowDraggable, setRowDraggable] = React.useState(false);
  const [tableLoading, setTableLoading] = React.useState(false);

  React.useEffect(() => {
    setTableLoading(false);
  }, [items, setTableLoading]);

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
      setTableRowDrop(null);
    }
  };

  if (tableLoading) {
    return <EntireScreenLoading />;
  }

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
        setTableLoading={setTableLoading}
      />
    </TableRowStyle>
  );
};

export default TableRow;
