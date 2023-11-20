import React from 'react';
import { FlexColumn } from '../utils/containers';
import styled from 'styled-components';

const FormatterStyle = styled(FlexColumn)`
  width: 100%;
  height: 100vh;
  background: rgba(42, 42, 74, 1);
  padding: 156px 180px 136px 60px;
`;

const Formatter = () => {
  return (
    <FormatterStyle>
      <FlexColumn>Open formatter</FlexColumn>
    </FormatterStyle>
  );
};

export default Formatter;
