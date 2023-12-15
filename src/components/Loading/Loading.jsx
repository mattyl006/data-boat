import React from 'react';
import { FlexColumn } from '../../utils/containers';
import spinnerImage from '../../assets/spinner.svg';
import SpinnerStyle from './LoadingStyle';

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
