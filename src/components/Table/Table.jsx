import React from 'react';
import TableStyle from './TableStyle';
import { useDispatch } from 'react-redux';
import { addRowId } from '../../redux/rowIdsSlice';
import { useSelector } from 'react-redux';
import TableRow from '../TableRow/TableRow';
import DraggableTableRow from '../DraggableTableRow';
import { tableRowsSwap } from '../../redux/tableDataSlice';

const Table = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.tableData.tableData);
  const [tableRowDrop, setTableRowDrop] = React.useState(null);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  React.useEffect(() => {
    forceUpdate();
  }, [forceUpdate, items]);

  const handleOnDrag = (row, index) => {
    setTableRowDrop({ row: row, index: index });
  };

  const handleOnDrop = (currentRowIndex) => {
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

  const draggableTableRowRender = () => {
    if (tableRowDrop) {
      return <DraggableTableRow i={tableRowDrop.index} />;
    }
  };

  return (
    <>
      <TableStyle>
        {items.map((row, i) => {
          const bboxIds = Object.values(row)?.map(
            (item) => '' + Object.values(item)?.map((bbox) => bbox.id + '')
          );
          dispatch(addRowId(bboxIds));
          return (
            <TableRow
              i={i}
              row={row}
              handleOnDrag={handleOnDrag}
              handleOnDrop={handleOnDrop}
              bboxIds={bboxIds}
            />
          );
        })}
      </TableStyle>
      {draggableTableRowRender()}
    </>
  );
};

export default Table;
