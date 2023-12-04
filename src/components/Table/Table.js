import React from 'react';
import { Grid } from '../../utils/containers';
import theme from '../../utils/theme';
import { TableStyle, ItemStyle } from './TableStyles';
import { useSelector } from 'react-redux';

const Table = ({ items }) => {
  const storeBboxes = useSelector((state) => state.bboxes.bboxes);
  const [selectedBboxes, setSelectedBboxes] = React.useState([]);
  const [scrollPage, setScrollPage] = React.useState(0);

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
                    setScrollPage(0);
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
                    const elementBboxes = storeBboxes[i][attr];
                    const pages = [
                      ...new Set(
                        elementBboxes.map((bbox) =>
                          bbox.split('_')[0].replace('bbox', 'pdf-image')
                        )
                      ),
                    ];
                    let pageId = pages[scrollPage];
                    let element = document.getElementById(pageId);
                    element.scrollIntoView({ behavior: 'smooth' });
                    if (scrollPage < pages.length - 1) {
                      setScrollPage(scrollPage + 1);
                    } else setScrollPage(0);
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
