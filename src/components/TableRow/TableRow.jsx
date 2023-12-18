import React from 'react';
import TableRowStyle from './TableRowStyle';
import { useSelector } from 'react-redux';
import { ItemStyle } from '../Table/TableStyles';
import {
  onItemBlur,
  onItemFocus,
  onItemClick,
  renderItemValue,
} from '../Table/tableHelper';
import { useDispatch } from 'react-redux';
import { tableDataUpdate } from '../../redux/tableDataSlice';
import RowMenu from '../RowMenu';

const TableRow = ({i, row, bboxIds}) => {
  const dispatch = useDispatch();
  const itemsChecked = useSelector(
    (state) => state.tableData.tableItemsChecked
  );
  const [scrollPage, setScrollPage] = React.useState(0);
  const [rowMenuOpen, setRowMenuOpen] = React.useState('');
  const [rowMenuHover, setRowMenuHover] = React.useState(false);
  const [selectedBboxes, setSelectedBboxes] = React.useState([]);

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
        const itemKey = item[0];
        const itemValue = item[1];
        return (
          <ItemStyle
            id={`bboxes-${bboxIds[j]}`}
            key={`item-${i}-${itemKey}`}
            as="textarea"
            type="text"
            onBlur={() => onItemBlur(selectedBboxes, setScrollPage)}
            onFocus={() => onItemFocus(itemValue, setSelectedBboxes)}
            onClick={() => onItemClick(itemValue, scrollPage, setScrollPage)}
            onChange={(event) => {
              const textValue = event.target.value;
              dispatch(
                tableDataUpdate({
                  row: i,
                  column: itemKey,
                  value: textValue,
                })
              );
            }}
            value={renderItemValue(itemValue)}
          />
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
