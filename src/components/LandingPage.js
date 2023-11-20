import React from 'react';
import styled from 'styled-components';
import { Container, FlexRow, Svg } from '../utils/containers';
import theme from '../utils/theme';
import { H1 } from '../utils/fonts';
import shipImage from '../assets/ship.png';
import fileImage from '../assets/file.png';

const LandingPageStyle = styled(Container)`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #2c95d8 0%, #18356d 91.15%);
  padding: 156px 180px 136px 60px;

  .LandingPage__document-input {
    gap: 20px;
    padding: 6px 12px;
    position: relative;
    justify-content: flex-start;
    cursor: pointer;

    * {
      cursor: pointer;
    }
  }

  label {
    font-size: 24px;
    font-weight: 400;
    color: #fff;
  }

  input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const LandingPage = ({ setOpenFormatter }) => {
  const id = 'documentInput';
  return (
    <LandingPageStyle>
      <H1 margin="0 0 20px 0" color={theme.colors.white}>
        Widok i edycja dokumentu PDF
      </H1>
      <FlexRow className="LandingPage__document-input">
        <Svg
          backgroundColor={theme.colors.white}
          src={fileImage}
          width="40px"
          height="40px"
        />
        <label htmlFor={id}>Otwórz dokument</label>
        <input
          id={id}
          name={id}
          type="file"
          accept="application/pdf"
          onChange={() => {
            setOpenFormatter(true);
          }}
        />
      </FlexRow>
      <Svg
        backgroundColor={theme.colors.white}
        src={shipImage}
        width="500px"
        height="490px"
        margin="0 0 0 auto"
      />
    </LandingPageStyle>
  );
};

export default LandingPage;
