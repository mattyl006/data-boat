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
import { write, read } from 'xlsx';

const TargetStyle = styled(FlexColumn)`
  width: 50%;
  height: 100%;
  justify-content: flex-start;
  overflow-y: scroll;
  padding: 60px 85px 0;
`;

const Target = ({ tableData }) => {
  const [objUrl, setObjUrl] = React.useState(null);

  const downloadTable = () => {
    let tsvContent = `a\tb\tc\td\n`;
    tableData.forEach((row) => {
      const rowA = Object.values(row['1st'])
        .map((bbox) => bbox.text.replaceAll('\n', '').replaceAll('\t', ''))
        .join(' ');
      const rowB = Object.values(row['2nd'])
        .map((bbox) => bbox.text.replaceAll('\n', '').replaceAll('\t', ''))
        .join(' ');
      const rowC = Object.values(row['3rd'])
        .map((bbox) => bbox.text.replaceAll('\n', '').replaceAll('\t', ''))
        .join(' ');
      const rowD = Object.values(row['4th'])
        .map((bbox) => bbox.text.replaceAll('\n', '').replaceAll('\t', ''))
        .join(' ');
      tsvContent += `${rowA}\t${rowB}\t${rowC}\t${rowD}\n`;
    });
    const wb = read(tsvContent.split(',').join('","'), {
      type: 'string',
      raw: true,
    });
    const data = write(wb, { type: 'buffer', bookType: 'xlsx' });
    const blob = new Blob([data], { type: 'text/tsv;charset=utf-8,' });
    setObjUrl(URL.createObjectURL(blob));
  };

  const icons = [
    { src: zoomInIco, handler: () => console.log('zoomIn'), disabled: true },
    { src: zoomOutIco, handler: () => console.log('zoomOut'), disabled: true },
    { src: resetIco, handler: () => console.log('reset'), disabled: true },
    {
      src: downloadIco,
      as: 'a',
      href: objUrl,
      download: 'test.xlsx',
      handler: () => downloadTable(),
      disabled: false,
    },
  ];

  if (tableData?.length) {
    return (
      <>
        <Menu icons={icons} />
        <TargetStyle>
          <Table />
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
