import React from 'react';
import TableRowStyle from './TableRowStyle';
import { useSelector } from 'react-redux';
import RowMenu from '../RowMenu';
import TableItem from '../TableItem';
import { useDispatch } from 'react-redux';
import { tableOpenMenuRowUpdate } from '../../redux/tableDataSlice';

const TableRow = ({ i, row, bboxIds }) => {
  const dispatch = useDispatch();
  const itemsChecked = useSelector((state) => state.tableData.tableRowsChecked);
  const [rowMenuHover, setRowMenuHover] = React.useState(false);
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
      <RowMenu i={i} setRowMenuHover={setRowMenuHover} />
    </TableRowStyle>
  );
};

export default TableRow;
