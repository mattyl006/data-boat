import React from "react";
import TableItemStyle from "./TableItemStyle";
import {
    onItemBlur,
    onItemFocus,
    onItemClick,
  } from './tableItemHelper';
  import { useDispatch } from 'react-redux';
  import { tableDataUpdate } from '../../redux/tableDataSlice';

const TableItem = ({i, j, item, bboxIds}) => {
    const dispatch = useDispatch();
    const [selectedBboxes, setSelectedBboxes] = React.useState([]);
    const [scrollPage, setScrollPage] = React.useState(0);
    const itemKey = item[0];
    const itemValue = item[1];
    const [valueToUpdate, setValueToUpdate] = React.useState(itemValue[0]?.textValue ? itemValue[0].textValue : '');
    console.log(valueToUpdate === itemValue[0].textValue);
    return (
      <TableItemStyle
        id={`bboxes-${bboxIds[j]}`}
        as="textarea"
        type="text"
        onBlur={() => {
          onItemBlur(selectedBboxes, setScrollPage);
          if (valueToUpdate !== itemValue[0].textValue) {
            console.log(valueToUpdate === itemValue[0].textValue);
            dispatch(
              tableDataUpdate({
                row: i,
                column: itemKey,
                value: valueToUpdate,
              })
            );
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