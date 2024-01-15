import React from 'react';
import TableItem from '../TableItem';
import { FlexColumn } from '../../utils/containers';
import TableRowStyle from '../TableRow/TableRowStyle';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

const DraggableTableRow = ({ i, setDragLoading, event }) => {
  const [coords, setCoords] = React.useState({
    x: event.clientX,
    y: event.clientY,
  });
  const items = useSelector((state) => state.tableData.tableData);

  React.useEffect(() => {
    setDragLoading(false);
  }, [setDragLoading]);

  React.useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);

  const bboxIds = ['dragElem'];

  return createPortal(
    <FlexColumn
      width="50%"
      zIndex="100"
      position="absolute"
      top={`${coords.y + 2}px`}
      left={`${coords.x + 2}px`}
      opacity="0.3"
    >
      <TableRowStyle>
        {Object.entries(items[i]).slice(0, -1).map((item, j) => {
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
      </TableRowStyle>
    </FlexColumn>,
    document.body
  );
};

export default DraggableTableRow;
