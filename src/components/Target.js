import React from 'react';
import { FlexColumn } from '../utils/containers';
import Menu from './Menu';
import Table from './Table/Table';
import styled from 'styled-components';
import Loading from './Loading';
import resetIco from '../assets/reset.svg';
import zoomInIco from '../assets/zoomIn.svg';
import zoomOutIco from '../assets/zoomOut.svg';
import downloadIco from '../assets/download.svg';

const TargetStyle = styled(FlexColumn)`
  width: 50%;
  height: 100%;
  justify-content: flex-start;
  overflow-y: scroll;
  padding: 60px 85px 0;
`;

const Target = ({ tableData }) => {
  const icons = [
    { src: zoomInIco, handler: () => console.log('zoomIn'), disabled: true },
    { src: zoomOutIco, handler: () => console.log('zoomOut'), disabled: true },
    { src: resetIco, handler: () => console.log('reset'), disabled: true },
    {
      src: downloadIco,
      handler: () => console.log('download'),
      disabled: false,
    },
  ];

  if (tableData?.length) {
    return (
      <>
        <Menu icons={icons} />
        <TargetStyle>
          <Table items={tableData} />
        </TargetStyle>
      </>
    );
  }
  return (
    <>
      <Menu icons={icons} />
      <FlexColumn width="50%" height="100%" padding="60px 0 0 0">
        <Loading />
      </FlexColumn>
    </>
  );
};

export default Target;
