import React from 'react';
import TableRowStyle from './TableRowStyle';
import { useSelector } from 'react-redux';
import RowMenu from '../RowMenu';
import TableItem from '../TableItem';

const TableRow = ({i, row, bboxIds}) => {
  const itemsChecked = useSelector(
    (state) => state.tableData.tableItemsChecked
  );
  const [rowMenuOpen, setRowMenuOpen] = React.useState('');
  const [rowMenuHover, setRowMenuHover] = React.useState(false);
  return (
    <TableRowStyle
      id={`row-${bboxIds}`}
      key={`row-${i}`}
      onClick={() => setRowMenuOpen(`rowMenuOpen-${i}`)}
      onBlur={() => {
        if (!rowMenuHover) setRowMenuOpen('');
      }}
      check={itemsChecked[i]}
    >
      {Object.entries(row).map((item, j) => {
        return (
          <TableItem i={i} j={j} item={item} bboxIds={bboxIds} />
        );
      })}
      <RowMenu
        i={i}
        rowMenuOpen={rowMenuOpen}
        setRowMenuHover={setRowMenuHover}
      />
    </TableRowStyle>
  );
};

export default TableRow;
