import React from 'react';
import { FlexColumn } from '../utils/containers';
import Menu from './Menu';
import Table from './Table';

const Target = () => {
  return (
    <>
      <Menu />
      <FlexColumn width="50%" padding="60px 85px 0" height="100%">
        <Table />
      </FlexColumn>
    </>
  );
};

export default Target;
