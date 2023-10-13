import React from 'react';
import { FlexColumn } from '../utils/containers';
import { H1 } from '../utils/fonts';
import { Link } from 'react-router-dom';

const NextPage = () => {
  return (
    <FlexColumn width="100%" height="calc(100vh - 48px)">
      <H1>NextPage</H1>
      <Link to="/">StartPage</Link>
    </FlexColumn>
  );
};

export default NextPage;
