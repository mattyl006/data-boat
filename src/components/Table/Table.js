import React from 'react';
import { Grid } from '../../utils/containers';
import theme from '../../utils/theme';
import { TableStyle, ItemStyle } from './TableStyles';
import { useDispatch } from 'react-redux';
import { addRowId } from '../../redux/rowIdsSlice';
import { useSelector } from 'react-redux';
import { tableDataUpdate } from '../../redux/tableDataSlice';

const Table = () => {
  const [selectedBboxes, setSelectedBboxes] = React.useState([]);
  const [scrollPage, setScrollPage] = React.useState(0);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.tableData.tableData);

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedValue = event.clipboardData.getData('text');
    if (typeof pastedValue === 'string') {
      event.target.innerHTML = event.target.innerHTML + pastedValue.toString();
    }
  };

  const renderItemValue = (itemValue) => {
    if (itemValue[0]?.textValue) {
      return itemValue[0].textValue;
    }
    return itemValue.map((bbox) => {
      return bbox.text + ' ';
    });
  };

  console.log(items);

  return (
    <TableStyle width="100%" backgroundColor={theme.colors.white}>
      {items.map((row, i) => {
        const bboxIds = Object.values(row).map(
          (item) => '' + Object.values(item).map((bbox) => bbox.id + '')
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
                  contenteditable="true"
                  padding="14px 8px"
                  color={theme.colors.black}
                  onPaste={(e) => handlePaste(e)}
                  alignmentY="flex-start"
                  onBlur={() => {
                    if (selectedBboxes.length) {
                      selectedBboxes.forEach((id) => {
                        const element = document.getElementById(id);
                        element.classList.remove('bboxFocus');
                      });
                    }
                    setScrollPage(0);
                  }}
                  onFocus={() => {
                    const newSelectedBboxes = [];
                    itemValue?.forEach((bbox) => {
                      const id = `bbox-${bbox.id}`;
                      newSelectedBboxes.push(id);
                      const element = document.getElementById(id);
                      element.classList.add('bboxFocus');
                    });
                    setSelectedBboxes(newSelectedBboxes);
                  }}
                  onClick={() => {
                    if (itemValue) {
                      const pages = [
                        ...new Set(
                          itemValue.map(
                            (bbox) => 'pdf-image-' + bbox.id.split('_')[0]
                          )
                        ),
                      ];
                      let pageId = pages[scrollPage];
                      const element = document.getElementById(pageId);
                      element.scrollIntoView({ behavior: 'smooth' });
                      if (scrollPage < pages.length - 1) {
                        setScrollPage(scrollPage + 1);
                      } else setScrollPage(0);
                    }
                  }}
                  onInput={(event) => {
                    const textValue = event.target.innerText;
                    dispatch(
                      tableDataUpdate({
                        row: i,
                        column: itemKey,
                        value: textValue,
                      })
                    );
                    const el = event.target;
                    const selection = window.getSelection();
                    const range = document.createRange();
                    selection.removeAllRanges();
                    range.selectNodeContents(el);
                    range.collapse(false);
                    selection.addRange(range);
                    el.focus();
                  }}
                >
                  {renderItemValue(itemValue)}
                </ItemStyle>
              );
            })}
          </Grid>
        );
      })}
    </TableStyle>
  );
};

export default Table;
