import React from 'react';
import TableStyle from './TableStyle';
import { useDispatch } from 'react-redux';
import { addRowId } from '../../redux/rowIdsSlice';
import { useSelector } from 'react-redux';
import TableRow from '../TableRow/TableRow';

const Table = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.tableData.tableData);
  const [tableRowDrop, setTableRowDrop] = React.useState(null);

  console.log(items);

  return (
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
            tableRowDrop={tableRowDrop}
            setTableRowDrop={setTableRowDrop}
            bboxIds={bboxIds}
          />
        );
      })}
    </TableStyle>
  );
};

export default Table;
