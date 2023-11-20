import React from 'react';
import { Container, Grid } from '../utils/containers';
import theme from '../utils/theme';

const items = [
  { a: '2.1', b: 'Hull', c: '', d: 'Hull' },
  {
    a: '2.1.1',
    b: 'Buoyancy Tank',
    c: '',
    d: `Buoyancy Tank
In order to fulfill damage stability criteria a buoyanc
tank is to be fitted in cargo
space forward of frame #101, as shown on General
Arrangement drawing JK03102011 (see Appendix A
Estimated steel weight: 21,25 ton.
Tank top is to be located at Upper Deck level, 8000
above the base line.
The tank is to be equipped as follows:
Two (2) Manholes to be arranged in the transverse
bulkhead frame #101.
Two (2) air pipes ND 150 with air valve at top
(stainless steel) located as protected as possible. O
pipe starts just above bottom and the other one jus
lead through the top of tank.
Two (2) bilge suctions at aft end of tank connected
the existing bilge system with separate valves
supplemented on the existing bilge chest.
One bilge alarm at center aft.
Manual sounding from upper deck is to be establish
Cross bar is to be located at lower part of sound pip
as per normal standard.
Paint treatment – see paint specification`,
  },
];

const Table = () => {
  return (
    <Container width="100%" height="100%" backgroundColor={theme.colors.white}>
      {items.map((row, i) => {
        return (
          <Grid
            key={`row-${i}`}
            gridTemplateColumns="1fr 2fr 1fr 8fr"
            width="100%"
          >
            {Object.values(row).map((item, j) => {
              return (
                <Container
                  key={`item-${i}-${j}`}
                  padding="14px 8px"
                  color={theme.colors.black}
                  alignmentY="flex-start"
                  border={`1px solid black`}
                >
                  {item}
                </Container>
              );
            })}
          </Grid>
        );
      })}
    </Container>
  );
};

export default Table;
