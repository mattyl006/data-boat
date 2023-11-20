import React from 'react';
import { FlexRow } from '../utils/containers';
import styled from 'styled-components';
import Source from './Source';
import Target from './Target';

const FormatterStyle = styled(FlexRow)`
  padding: 60px 0 0 0;
  width: 100%;
  height: 100vh;
  background: rgba(42, 42, 74, 1);
  /* padding: 156px 180px 136px 60px; */
`;

const Formatter = () => {
  return (
    <FormatterStyle>
      <Source />
      <Target />
    </FormatterStyle>
  );
};

export default Formatter;
