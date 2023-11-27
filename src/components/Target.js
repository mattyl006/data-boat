import React from 'react';
import { FlexColumn } from '../utils/containers';
import Menu from './Menu';
import Table from './Table/Table';
import styled from 'styled-components';
import Loading from './Loading';
import { TEST_TARGET_ITEMS } from '../utils/globals';

const TargetStyle = styled(FlexColumn)`
  width: 50%;
  height: 100%;
  justify-content: flex-start;
  overflow-y: scroll;
  padding: 60px 85px 0;
`;

const Target = ({ imageUrls, imageBboxes }) => {
  const imageUrlsLength = imageUrls?.length;
  const imageBboxesLength = imageBboxes?.length;
  const imagesRendered =
    imageUrlsLength &&
    imageBboxesLength &&
    imageUrlsLength === imageBboxesLength;

  if (imagesRendered) {
    return (
      <>
        <Menu />
        <TargetStyle>
          <Table items={TEST_TARGET_ITEMS} />
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
