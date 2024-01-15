import React from 'react';
import TableItemStyle from './TableItemStyle';
// import { onItemBlur, onItemFocus, onItemClick } from './tableItemHelper';
import { useDispatch, useSelector } from 'react-redux';
import {
  setTableModifyEventWas,
} from '../../redux/tableDataSlice';
import {
  onItemBlur,
  onItemClick,
  onItemFocus,
} from '../../redux/synchronizeSlice';
import EntireScreenLoading from '../EntireScreenLoading';

const TableItem = ({ i, j, item, bboxIds, readOnly }) => {
  const dispatch = useDispatch();
  const tableModifyEventWas = useSelector(
    (state) => state.tableData.tableModifyEventWas
  );
  const itemValue = item[1];
  const [valueToUpdate, setValueToUpdate] = React.useState(
    itemValue[0]?.textValue ? itemValue[0].textValue : ''
  );
  const [updateLoading, setUpdateLoading] = React.useState(false);

  React.useEffect(() => {
    if (valueToUpdate !== itemValue[0]?.textValue && tableModifyEventWas) {
      setValueToUpdate(itemValue[0]?.textValue ? itemValue[0].textValue : '');
      dispatch(setTableModifyEventWas(false));
    }
  }, [dispatch, itemValue, tableModifyEventWas, valueToUpdate]);

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
          className="tableItem"
          type="text"
          value={valueToUpdate}
        />
        <EntireScreenLoading />
      </>
    );
  }

  return (
    <TableItemStyle
      id={`bboxes-${bboxIds[j]}`}
      as="textarea"
      className="tableItem"
      type="text"
      onBlur={() => {
        dispatch(
          onItemBlur({
            itemValue,
          })
        );
      }}
      onFocus={() => {
        dispatch(onItemFocus(itemValue));
        // onItemFocus(itemValue, setSelectedBboxes)
      }}
      onClick={() => {
        dispatch(onItemClick(itemValue));
        // onItemClick(itemValue, scrollPage, setScrollPage)
      }}
      onChange={(event) => {
        if (!readOnly) {
          const textValue = event.target.value;
          setValueToUpdate(textValue);
        }
      }}
      value={valueToUpdate}
    />
  );
};

export default TableItem;
