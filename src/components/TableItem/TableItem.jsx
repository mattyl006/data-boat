import React from 'react';
import TableItemStyle from './TableItemStyle';
import { onItemBlur, onItemFocus, onItemClick } from './tableItemHelper';
import { useDispatch, useSelector } from 'react-redux';
import { tableDataUpdate, setTableModifyEventWas } from '../../redux/tableDataSlice';
import Loading from '../Loading';
import { createPortal } from 'react-dom';
import { FlexColumn } from '../../utils/containers';
import theme from '../../utils/theme';

const TableItem = ({ i, j, item, bboxIds }) => {
  const dispatch = useDispatch();
  const tableModifyEventWas = useSelector((state) => state.tableData.tableModifyEventWas);
  const [selectedBboxes, setSelectedBboxes] = React.useState([]);
  const [scrollPage, setScrollPage] = React.useState(0);
  const itemKey = item[0];
  const itemValue = item[1];
  const [valueToUpdate, setValueToUpdate] = React.useState(
    itemValue[0]?.textValue ? itemValue[0].textValue : ''
  );
  const [updateLoading, setUpdateLoading] = React.useState(false);

  React.useEffect(() => {
    if (valueToUpdate !== itemValue[0]?.textValue && tableModifyEventWas) {
      setValueToUpdate(itemValue[0]?.textValue ? itemValue[0].textValue : '');
      dispatch(setTableModifyEventWas(false))
    }
  }, [dispatch, itemValue, tableModifyEventWas, valueToUpdate])

  React.useEffect(() => {
    if (valueToUpdate === itemValue[0]?.textValue) {
      setUpdateLoading(false);
    }
  }, [itemValue, valueToUpdate]);

  if (updateLoading) {
    return (
      <>
        <TableItemStyle
          id={`bboxes-${bboxIds[j]}`}
          as="textarea"
          type="text"
          onBlur={() => {
            onItemBlur(selectedBboxes, setScrollPage);
            if (valueToUpdate !== itemValue[0].textValue) {
              setUpdateLoading(true);
              setTimeout(() => {
                dispatch(
                  tableDataUpdate({
                    row: i,
                    column: itemKey,
                    value: valueToUpdate,
                  })
                );
              }, 100);
            }
          }}
          onFocus={() => onItemFocus(itemValue, setSelectedBboxes)}
          onClick={() => onItemClick(itemValue, scrollPage, setScrollPage)}
          onChange={(event) => {
            const textValue = event.target.value;
            setValueToUpdate(textValue);
          }}
          value={valueToUpdate}
        />
        {createPortal(
          <FlexColumn
            width="100%"
            height="100vh"
            position="absolute"
            top="0"
            left="0"
            zIndex="100"
            backgroundColor={theme.colors.blackTrans}
          >
            <Loading />
          </FlexColumn>,
          document.body
        )}
      </>
    );
  }

  return (
    <TableItemStyle
      id={`bboxes-${bboxIds[j]}`}
      as="textarea"
      type="text"
      onBlur={() => {
        onItemBlur(selectedBboxes, setScrollPage);
        if (valueToUpdate !== itemValue[0].textValue) {
          setUpdateLoading(true);
          setTimeout(() => {
            dispatch(
              tableDataUpdate({
                row: i,
                column: itemKey,
                value: valueToUpdate,
              })
            );
          }, 100);
        }
      }}
      onFocus={() => onItemFocus(itemValue, setSelectedBboxes)}
      onClick={() => onItemClick(itemValue, scrollPage, setScrollPage)}
      onChange={(event) => {
        const textValue = event.target.value;
        setValueToUpdate(textValue);
      }}
      value={valueToUpdate}
    />
  );
};

export default TableItem;
