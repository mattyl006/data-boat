import React from 'react';
import { TableStyle, ItemStyle, RowStyle } from './TableStyles';
import { useDispatch } from 'react-redux';
import { addRowId } from '../../redux/rowIdsSlice';
import { useSelector } from 'react-redux';
import { tableDataUpdate } from '../../redux/tableDataSlice';
import {
  onItemBlur,
  onItemClick,
  onItemFocus,
  renderItemValue,
} from './tableHelper';
import RowMenu from '../RowMenu';

const Table = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.tableData.tableData);
  const itemsChecked = useSelector((state) => state.tableData.tableItemsChecked);
  const [selectedBboxes, setSelectedBboxes] = React.useState([]);
  const [scrollPage, setScrollPage] = React.useState(0);
  const [rowMenuOpen, setRowMenuOpen] = React.useState('');
  const [rowMenuHover, setRowMenuHover] = React.useState(false);

  return (
    <TableStyle>
      {items.map((row, i) => {
        const bboxIds = Object.values(row)?.map(
          (item) => '' + Object.values(item)?.map((bbox) => bbox.id + '')
        );
        dispatch(addRowId(bboxIds));
        return (
          <RowStyle
            id={`row-${bboxIds}`}
            key={`row-${i}`}
            onClick={() => setRowMenuOpen(`rowMenuOpen-${i}`)}
            onBlur={() => {if (!rowMenuHover) setRowMenuOpen("")}}
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
                  onClick={() =>
                    onItemClick(itemValue, scrollPage, setScrollPage)
                  }
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
            <RowMenu i={i} rowMenuOpen={rowMenuOpen} setRowMenuHover={setRowMenuHover} />
          </RowStyle>
        );
      })}
    </TableStyle>
  );
};

export default Table;
