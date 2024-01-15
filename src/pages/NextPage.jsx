import React from 'react';
import { FlexColumn } from '../utils/containers';
import Table from '../components/Table/Table';
import { useDispatch, useSelector } from 'react-redux';
import { setTwoScreens } from '../redux/synchronizeSlice';
import Loading from '../components/Loading';
import { Medium } from '../utils/fonts';
import resetIco from '../assets/reset.svg';
import zoomInIco from '../assets/zoomIn.svg';
import zoomOutIco from '../assets/zoomOut.svg';
import downloadIco from '../assets/download.svg';
import { downloadTable } from '../components/Target/targetHelper';
import Menu from '../components/Menu';

const NextPage = () => {
  const items = useSelector((state) => state.tableData.tableData);
  const dispatch = useDispatch();
  const [objUrl, setObjUrl] = React.useState(null);
  const fileName = useSelector((state) => state.tableData.fileName);

  React.useEffect(() => {
      dispatch(setTwoScreens(true));
  }, [dispatch]);

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
      disabled: items?.length ? false : true,
    },
  ];

  if (items?.length) {
    return (
      <>
        <FlexColumn zIndex="10" width="60px" height="100vh" position="fixed" top="0" left="0">
          <Menu icons={icons} />
        </FlexColumn>
        <FlexColumn
          padding="120px 80px 60px 140px"
          backgroundColor="rgba(42, 42, 74, 1)"
          alignmentY="flex-start"
          width="100%"
          minHeight="100vh"
        >
          <Table />
        </FlexColumn>
      </>
    );
  }

  return (
    <FlexColumn
      padding="120px 90px 60px"
      backgroundColor="rgba(42, 42, 74, 1)"
      width="100%"
      height="100vh"
      gap="36px"
    >
      <Medium fontSize="24px">
        Proszę otworzyć dokument na pierwszym ekranie aby wyświetlić tabelę
      </Medium>
      <Loading />
    </FlexColumn>
  );
};

export default NextPage;
