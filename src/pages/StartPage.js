import React from 'react';

import Formatter from '../components/Formatter';
import LandingPage from '../components/LandingPage';

const StartPage = () => {
  const [openFormatter, setOpenFormatter] = React.useState(false);

  if (openFormatter) {
    return <Formatter />;
  }

  return <LandingPage setOpenFormatter={setOpenFormatter} />;
};

export default StartPage;
