import React from 'react';
import { FlexColumn } from '../../utils/containers';
import Menu from '../Menu/Menu';
import Table from '../Table/Table';
import Loading from '../Loading/Loading';
import resetIco from '../../assets/reset.svg';
import zoomInIco from '../../assets/zoomIn.svg';
import zoomOutIco from '../../assets/zoomOut.svg';
import downloadIco from '../../assets/download.svg';
import TargetStyle from './TargetStyle';
import { useSelector } from 'react-redux';
import { downloadTable } from './targetHelper';

const Target = () => {
  const [objUrl, setObjUrl] = React.useState(null);
  const tableData = useSelector((state) => state.tableData.tableData);

  const icons = [
    { src: zoomInIco, handler: () => console.log('zoomIn'), disabled: true },
    { src: zoomOutIco, handler: () => console.log('zoomOut'), disabled: true },
    { src: resetIco, handler: () => console.log('reset'), disabled: true },
    {
      src: downloadIco,
      as: 'a',
      href: objUrl,
      download: 'test.xlsx',
      handler: () => downloadTable(tableData, setObjUrl),
      disabled: false,
    },
  ];

  if (tableData?.length) {
    return (
      <>
        <Menu icons={icons} paging />
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
