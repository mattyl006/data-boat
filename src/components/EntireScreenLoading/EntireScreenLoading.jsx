import React from 'react';
import { createPortal } from 'react-dom';
import { FlexColumn } from '../../utils/containers';
import Loading from '../Loading';
import theme from '../../utils/theme';

const EntireScreenLoading = () => {
  return createPortal(
    <FlexColumn
      width="100%"
      height="100vh"
      position="absolute"
      top="0"
      left="0"
      zIndex="100"
      backgroundColor={theme.colors.blackTrans}
    >
      <Loading />
    </FlexColumn>,
    document.body
  );
};

export default EntireScreenLoading;
