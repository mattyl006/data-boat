import React from 'react';
import TableRowStyle from './TableRowStyle';
import { useSelector } from 'react-redux';
import RowMenu from '../RowMenu';
import TableItem from '../TableItem';
import { useDispatch } from 'react-redux';
import { tableOpenMenuRowUpdate } from '../../redux/tableDataSlice';
import EntireScreenLoading from '../EntireScreenLoading';

const TableRow = ({ i, row, bboxIds, handleOnDrop, handleOnDrag }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.tableData.tableData);
  const itemsChecked = useSelector((state) => state.tableData.tableRowsChecked);
  const dataProperties = useSelector((state) => state.tableData.tableDataProperties);
  const [rowMenuHover, setRowMenuHover] = React.useState(false);
  const [tableLoading, setTableLoading] = React.useState(false);
  const [rowDeleted, setRowDeleted] = React.useState(false);

  React.useEffect(() => {
    setTableLoading(false);
  }, [items, setTableLoading]);

  if (tableLoading) {
    return <EntireScreenLoading />;
  }

  const calculateTextLines = () => {
    let numOfLines = 0;
    Object.values(row).forEach((item) => {
      numOfLines += item[0]?.textValue?.match(new RegExp("\\n", 'g'))?.length ? item[0].textValue.match(new RegExp("\\n", 'g'))?.length : 1;
    })
    return numOfLines;
  }

  if (!rowDeleted && dataProperties[i]?.visible) {
    return (
      <TableRowStyle
        id={`row-${bboxIds}`}
        key={`row-${i}`}
        order={dataProperties[i]?.order}
        onClick={() => {
          handleOnDrop(i);
          dispatch(tableOpenMenuRowUpdate({ i: i, value: true }));
        }}
        onBlur={() => {
          if (!rowMenuHover)
            dispatch(tableOpenMenuRowUpdate({ i: i, value: false }));
        }}
        check={itemsChecked[i]}
      >
        {Object.entries(row)
          .map((item, j) => {
            return (
              <TableItem
                key={`item-${i}-${j}`}
                i={i}
                j={j}
                item={item}
                bboxIds={bboxIds}
                numOfLines={calculateTextLines()}
              />
            );
          })}
        <RowMenu
          i={i}
          setRowMenuHover={setRowMenuHover}
          handleOnDrag={(e) => handleOnDrag(e, row, i)}
          setTableLoading={setTableLoading}
          setRowDeleted={setRowDeleted}
        />
      </TableRowStyle>
    );
  }
};

export default TableRow;
