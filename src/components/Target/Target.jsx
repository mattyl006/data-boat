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

const Target = ({fileName}) => {
  const [objUrl, setObjUrl] = React.useState(null);
  const tableData = useSelector((state) => state.tableData.tableData);

  // const exportResult = () => {
  //   getData(pdfProcessingResult[0].table_url, setResultTableData);
  // }

  // React.useEffect(() => {
  //   dispatch()
  // }, [resultTableData])

  const icons = [
    { src: zoomInIco, handler: () => console.log('zoomIn'), disabled: true },
    { src: zoomOutIco, handler: () => console.log('zoomOut'), disabled: true },
    { src: resetIco, handler: () => console.log('reset'), disabled: true },
    {
      src: downloadIco,
      as: 'a',
      href: objUrl,
      download: `${fileName?.split('.')[0]}.xlsx`,
      handler: () => downloadTable(setObjUrl),
      disabled: tableData?.length ? false : true,
    },
  ];

  if (tableData?.slice(-1)[0]?.["1st"][0]["id"]) {
    return (
      <>
        <Menu icons={icons}/>
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
