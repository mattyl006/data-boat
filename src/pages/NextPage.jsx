import React from 'react';
import { FlexColumn } from '../utils/containers';
import Table from '../components/Table/Table';
import { useDispatch, useSelector } from 'react-redux';
import { setTwoScreens } from '../redux/synchronizeSlice';
import Loading from '../components/Loading';
import { Medium } from '../utils/fonts';

const NextPage = () => {
  const items = useSelector((state) => state.tableData.tableData);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (items?.length) {
      dispatch(setTwoScreens(true));
    }
  }, [dispatch, items]);

  if (items?.length) {
    return (
      <FlexColumn
        padding="120px 90px 60px"
        backgroundColor="rgba(42, 42, 74, 1)"
        alignmentY="flex-start"
        width="100%"
      >
        <Table />
      </FlexColumn>
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
