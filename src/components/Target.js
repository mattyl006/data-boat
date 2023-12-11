import React from 'react';
import { FlexColumn } from '../utils/containers';
import Menu from './Menu';
import Table from './Table/Table';
import styled from 'styled-components';
import Loading from './Loading';

const TargetStyle = styled(FlexColumn)`
  width: 50%;
  height: 100%;
  justify-content: flex-start;
  overflow-y: scroll;
  padding: 60px 85px 0;
`;

const Target = ({ tableData }) => {
  if (tableData?.length) {
    return (
      <>
        <Menu />
        <TargetStyle>
          <Table items={tableData} />
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
