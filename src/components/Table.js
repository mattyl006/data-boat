import React from 'react';
import { Container, Grid } from '../utils/containers';
import theme from '../utils/theme';
import styled from 'styled-components';

const TableStyle = styled(Container)``;

const ItemStyle = styled(Container)`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 2px;
    height: calc(100% + 2px);
    background-color: black;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: calc(100% + 2px);
    height: 2px;
    background-color: black;
  }
`;

const Table = ({ items }) => {
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
              return (
                <ItemStyle
                  key={`item-${i}-${j}`}
                  contenteditable="true"
                  padding="14px 8px"
                  color={theme.colors.black}
                  alignmentY="flex-start"
                  onFocus={(e) => console.log(e)}
                  onClick={() => {
                    const element = document.getElementById('bbox-7_161');
                    console.log(element);
                    element.scrollIntoView({ behavior: 'smooth' });
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
