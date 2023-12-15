import React from 'react';
import { Grid } from '../../utils/containers';
import theme from '../../utils/theme';
import { TableStyle, ItemStyle } from './TableStyles';
import { useDispatch } from 'react-redux';
import { addRowId } from '../../redux/rowIdsSlice';
import { useSelector } from 'react-redux';
import { tableDataUpdate } from '../../redux/tableDataSlice';
import { onItemBlur, onItemClick, onItemFocus, renderItemValue } from './tableHelper';

const Table = () => {
  const dispatch = useDispatch();
  const [selectedBboxes, setSelectedBboxes] = React.useState([]);
  const [scrollPage, setScrollPage] = React.useState(0);
  const items = useSelector((state) => state.tableData.tableData);

  return (
    <TableStyle width="100%" backgroundColor={theme.colors.white}>
      {items.map((row, i) => {
        const bboxIds = Object.values(row)?.map(
          (item) => '' + Object.values(item)?.map((bbox) => bbox.id + '')
        );
        dispatch(addRowId(bboxIds));
        return (
          <Grid
            id={`row-${bboxIds}`}
            key={`row-${i}`}
            // gridTemplateColumns="1fr 2fr 1fr 6fr"
            gridTemplateColumns="1fr 1fr 1fr 1fr"
            width="100%"
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
                  padding="14px 8px"
                  alignmentY="flex-start"
                  color={theme.colors.black}
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
          </Grid>
        );
      })}
    </TableStyle>
  );
};

export default Table;
