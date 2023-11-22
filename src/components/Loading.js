import React from 'react';
import { FlexColumn } from '../utils/containers';
import spinnerImage from '../assets/spinner.svg';
import styled, { keyframes } from 'styled-components';

const spinnerAnim = keyframes`
  0% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

const SpinnerStyle = styled.img`
  animation: ${spinnerAnim} 2s linear infinite;
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
`;

const Loading = ({ width, height }) => {
  return (
    <FlexColumn
      width={width ? width : '120px'}
      height={height ? height : '120px'}
      position="relative"
    >
      <SpinnerStyle src={spinnerImage} alt="" />
    </FlexColumn>
  );
};

export default Loading;
