import React from 'react';
import TableStyle from './TableStyle';
import { useDispatch } from 'react-redux';
import { addRowId } from '../../redux/rowIdsSlice';
import { useSelector } from 'react-redux';
import TableRow from '../TableRow/TableRow';
import DraggableTableRow from '../DraggableTableRow';
import { tableRowsSwap } from '../../redux/tableDataSlice';
import EntireScreenLoading from '../EntireScreenLoading';
import { TIMEOUT_VALUE } from '../../utils/globals';

const Table = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.tableData.tableData);
  const [tableRowDrop, setTableRowDrop] = React.useState(null);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const [dragLoading, setDragLoading] = React.useState(false);
  const [dropLoading, setDropLoading] = React.useState(false);

  React.useEffect(() => {
    forceUpdate();
  }, [forceUpdate, items]);

  React.useEffect(() => {
    if (tableRowDrop === null) {
      setDropLoading(false);
    }
  }, [tableRowDrop]);

  const handleOnDrag = (e, row, index) => {
    setDragLoading(true);
    setTimeout(() => {
      setTableRowDrop({ event: e, row: row, index: index });
    }, TIMEOUT_VALUE);
  };

  const handleOnDrop = (currentRowIndex) => {
    if (tableRowDrop) {
      setDropLoading(true);
      const { row, index } = tableRowDrop;
      setTimeout(() => {
        dispatch(
          tableRowsSwap({
            droppedRow: row,
            droppedRowIndex: index,
            currentRowIndex: currentRowIndex,
          })
        );
        setTableRowDrop(null);
      }, TIMEOUT_VALUE)
    }
  };

  const draggableTableRowRender = () => {
    if (tableRowDrop) {
      return (
        <DraggableTableRow
          i={tableRowDrop.index}
          setDragLoading={setDragLoading}
          event={tableRowDrop.event}
        />
      );
    }
  };

  return (
    <>
      <TableStyle id="Table">
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
      {(dragLoading || dropLoading) && <EntireScreenLoading />}
    </>
  );
};

export default Table;
