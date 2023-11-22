import React from 'react';
import Source from '../Source/Source';
import Target from '../Target';
import FormatterStyle from './FormatterStyle';

const Formatter = ({ pdfProcessingResult }) => {
  const [imageUrls, setImageUrls] = React.useState([]);
  const [imageBboxes, setImageBboxes] = React.useState([]);

  React.useEffect(() => {
    if (pdfProcessingResult?.length) {
      setImageUrls(pdfProcessingResult?.map((obj) => obj.image.image_url));
      setImageBboxes(pdfProcessingResult?.map((obj) => obj.bboxes));
    }
  }, [pdfProcessingResult]);

  return (
    <FormatterStyle>
      <Source imageUrls={imageUrls} imageBboxes={imageBboxes} />
      <Target imageUrls={imageUrls} imageBboxes={imageBboxes} />
    </FormatterStyle>
  );
};

export default Formatter;
