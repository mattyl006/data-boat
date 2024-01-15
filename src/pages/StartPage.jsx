import React from 'react';

import Formatter from '../components/Formatter';
import LandingSpace from '../components/LandingSpace/LandingSpace';

const StartPage = ({ openFormatter, setOpenFormatter }) => {
  const [pdfProcessingResult, setPdfProcessingResult] = React.useState(false);

  if (openFormatter) {
    return (
      <Formatter
        pdfProcessingResult={pdfProcessingResult}
      />
    );
  }

  return (
    <LandingSpace
      setOpenFormatter={setOpenFormatter}
      setPdfProcessingResult={setPdfProcessingResult}
    />
  );
};

export default StartPage;
