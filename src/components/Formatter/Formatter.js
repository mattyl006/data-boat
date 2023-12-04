import React from 'react';
import Source from '../Source/Source';
import Target from '../Target';
import FormatterStyle from './FormatterStyle';

const Formatter = ({ pdfProcessingResult }) => {
  const [images, setImages] = React.useState([]);
  const [imageBboxes, setImageBboxes] = React.useState([]);

  React.useEffect(() => {
    if (pdfProcessingResult?.length) {
      setImages(
        pdfProcessingResult?.map((obj) => ({
          url: obj.image.image_url,
          id: obj.image.id,
        }))
      );
      setImageBboxes(pdfProcessingResult?.map((obj) => obj.bboxes));
    }
  }, [pdfProcessingResult]);

  return (
    <FormatterStyle>
      <Source images={images} imageBboxes={imageBboxes} />
      <Target images={images} imageBboxes={imageBboxes} />
    </FormatterStyle>
  );
};

export default Formatter;
