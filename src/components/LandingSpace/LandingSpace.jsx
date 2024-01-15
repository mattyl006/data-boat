import React from 'react';
import { FlexRow, Svg } from '../../utils/containers';
import theme from '../../utils/theme';
import { Body, H1 } from '../../utils/fonts';
import shipImage from '../../assets/ship.png';
import fileImage from '../../assets/file.png';
import processPdf from '../../api/processPdf';
import LandingSpaceStyle from './LandingSpaceStyle';
import { useSelector } from 'react-redux';
import addRow from '../../assets/add_row.svg';

const LandingSpace = ({
  setOpenFormatter,
  setPdfProcessingResult,
  setFileName,
}) => {
  const id = 'documentInput';
  const token = useSelector((state) => state.authorize.token);
  return (
    <LandingSpaceStyle>
      <H1 margin="0 0 20px 0" color={theme.colors.white}>
        Widok i edycja dokumentu PDF
      </H1>
      <FlexRow as="label" htmlFor={id} className="LandingSpace__document-input">
        <Svg
          backgroundColor={theme.colors.white}
          src={fileImage}
          width="36px"
          height="36px"
          size="cover"
        />
        <Body className="LandingSpace__input-label">Otwórz dokument</Body>
        <input
          id={id}
          name={id}
          type="file"
          accept="application/pdf"
          onChange={(e) => {
            processPdf(e, setPdfProcessingResult, setFileName, token);
            setOpenFormatter(true);
          }}
        />
      </FlexRow>
      <FlexRow
        as="a"
        href={`${window.location}next-page`}
        target="_blank"
        className="LandingSpace__document-input"
      >
        <Svg
          backgroundColor={theme.colors.white}
          src={addRow}
          width="36px"
          height="36px"
          size="cover"
        />
        <Body className="LandingSpace__input-label">Otwórz drugi ekran</Body>
      </FlexRow>
      <Svg
        backgroundColor={theme.colors.white}
        src={shipImage}
        width="500px"
        height="490px"
        margin="0 0 0 auto"
      />
    </LandingSpaceStyle>
  );
};

export default LandingSpace;
