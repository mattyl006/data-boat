import React from 'react';
import { FlexColumn } from '../utils/containers';
import Menu from './Menu';
import page8 from '../assets/8.png';

const Source = () => {
  return (
    <>
      <Menu />
      <FlexColumn width="50%" padding="60px 0 0 0" height="100%">
        <img height="100%" src={page8} alt="" />
      </FlexColumn>
    </>
  );
};

export default Source;
