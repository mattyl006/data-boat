import React from 'react';

import Formatter from '../components/Formatter';
import LandingSpace from '../components/LandingSpace/LandingSpace';

const StartPage = ({ openFormatter, setOpenFormatter }) => {
  const [pdfProcessingResult, setPdfProcessingResult] = React.useState(false);
  const [fileName, setFileName] = React.useState(null);

  if (openFormatter) {
    return (
      <Formatter
        pdfProcessingResult={pdfProcessingResult}
        fileName={fileName}
      />
    );
  }

  return (
    <LandingSpace
      setOpenFormatter={setOpenFormatter}
      setPdfProcessingResult={setPdfProcessingResult}
      setFileName={setFileName}
    />
  );
};

export default StartPage;
