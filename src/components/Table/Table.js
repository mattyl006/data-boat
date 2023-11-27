import React from 'react';
import { Grid } from '../../utils/containers';
import theme from '../../utils/theme';
import { TableStyle, ItemStyle } from './TableStyles';
import { useSelector } from 'react-redux';

const Table = ({ items }) => {
  const storeBboxes = useSelector((state) => state.bboxes.bboxes);
  const [selectedBboxes, setSelectedBboxes] = React.useState([]);
  const [scrollIterator, setScrollIterator] = React.useState(0);
  return (
    <TableStyle width="100%" backgroundColor={theme.colors.white}>
      {items.map((row, i) => {
        return (
          <Grid
            key={`row-${i}`}
            gridTemplateColumns="1fr 2fr 1fr 6fr"
            width="100%"
          >
            {Object.values(row).map((item, j) => {
              let attr = null;
              if (j === 0) {
                attr = 'a';
              } else if (j === 1) {
                attr = 'b';
              } else if (j === 3) {
                attr = 'd';
              }
              return (
                <ItemStyle
                  key={`item-${i}-${j}`}
                  contenteditable="true"
                  padding="14px 8px"
                  color={theme.colors.black}
                  alignmentY="flex-start"
                  onBlur={() => {
                    if (selectedBboxes.length) {
                      selectedBboxes.forEach((id) => {
                        const element = document.getElementById(id);
                        element.classList.remove('bboxFocus');
                      });
                    }
                    setScrollIterator(0);
                  }}
                  onFocus={() => {
                    const newSelectedBboxes = [];
                    storeBboxes[i][attr].forEach((id) => {
                      newSelectedBboxes.push(id);
                      const element = document.getElementById(id);
                      element.classList.add('bboxFocus');
                    });
                    setSelectedBboxes(newSelectedBboxes);
                  }}
                  onClick={() => {
                    console.log(scrollIterator);
                    const element = document.getElementById(
                      storeBboxes[i][attr][scrollIterator]
                    );
                    element.scrollIntoView({ behavior: 'smooth' });
                    if (scrollIterator < storeBboxes[i][attr].length - 1) {
                      setScrollIterator(scrollIterator + 1);
                    } else setScrollIterator(0);
                  }}
                >
                  {item}
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
