import React from 'react';
import Source from '../Source/Source';
import Target from '../Target';
import FormatterStyle from './FormatterStyle';

const Formatter = ({ pdfProcessingResult }) => {
  const [imageUrls, setImageUrls] = React.useState([]);
  const [imageBboxes, setImageBboxes] = React.useState([]);

  React.useEffect(() => {
    if (pdfProcessingResult?.length) {
      setImageUrls(pdfProcessingResult?.map((image) => image.image_url));
      setImageBboxes(pdfProcessingResult?.map((image) => image.bboxes));
    }
  }, [pdfProcessingResult]);

  return (
    <FormatterStyle>
      <Source imageUrls={imageUrls} imageBboxes={imageBboxes} />
      <Target />
    </FormatterStyle>
  );
};

export default Formatter;
