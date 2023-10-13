import React from 'react';
import { FlexColumn } from '../utils/containers';
import { H1 } from '../utils/fonts';
import { Link } from 'react-router-dom';

const StartPage = () => {
  return (
    <FlexColumn width="100%" height="calc(100vh - 48px)">
      <H1>StartPage</H1>
      <Link to="/next-page">NextPage</Link>
    </FlexColumn>
  );
};

export default StartPage;
