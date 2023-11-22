import React from 'react';
import { FlexColumn } from '../utils/containers';
import Menu from './Menu';
import Table from './Table';
import styled from 'styled-components';
import Loading from './Loading';

const items = [
  {
    a: 'G0001',
    b: 'Usługi serwisowe',
    c: '',
    d: `Zakres prac nie ujęty w specyfikacji armatorskiej a
    będący zakresem pracy Stoczni wynikającym z
    instrukcji i procedur oraz zasad bezpieczeństwa (np
    nadzór i asysta, dodatkowy trap stoczniowy, obsług
    energo - elektryczna statku, kontrola jakości itd. itp
    WYCENA W OPARCIU O CENNIK BIURA HANDLOWEG
    WYCENIA KIEROWNIK REMONTU`,
  },
  {
    a: '2.0',
    b: 'DESCRIPTION OF CONVERSION',
    c: '',
    d: 'DESCRIPTION OF CONVERSION',
  },
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
    Paint treatment – see paint specification.`,
  },
  {
    a: '2.1.2',
    b: 'Foundation for CO2 Tanks',
    c: '0',
    d: `Foundation for CO2 Tanks
        The yard shall install the foundations for the CO2 ta
        located at frames #37 & #83.
        Structural principles are shown on drawings 22574,
        17422, 17423 & 22578 of a similar tank installation
        one of the Owners ships. These are in Appendix A4.
        The method of securing against longitudinal,
        transverse and vertical movement, rotation and ant
        floatation of the tank is shown on the same drawing
        A system of hardwood blocks is to be provided
        between the tank and foundations as shown on the
        drawings 22574, 17422, 17423 & 22578 in Appendi
        A4. The securing system, including the steel straps,
        anchors and tensioning arrangements, is to be provided and installed by the yard.
        At the foundations, the double bottom structure and
        side tank structure are to be strengthened.
        Preliminary design principles as follows:
        Reinforcements are to be carried out at the foundat
        at aft frame 32 – 42 and at
        fore frame 78 – 88.`,
  },
];

const TargetStyle = styled(FlexColumn)`
  width: 50%;
  height: 100%;
  justify-content: flex-start;
  overflow-y: scroll;
  padding: 60px 85px 0;
`;

const Target = ({ imageUrls, imageBboxes }) => {
  const imageUrlsLength = imageUrls?.length;
  const imageBboxesLength = imageBboxes?.length;
  const imagesRendered =
    imageUrlsLength &&
    imageBboxesLength &&
    imageUrlsLength === imageBboxesLength;

  if (imagesRendered) {
    return (
      <>
        <Menu />
        <TargetStyle>
          <Table items={items} />
        </TargetStyle>
      </>
    );
  }
  return (
    <>
      <Menu />
      <FlexColumn width="50%" height="100%" padding="60px 0 0 0">
        <Loading />
      </FlexColumn>
    </>
  );
};

export default Target;
