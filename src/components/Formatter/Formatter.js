import React from 'react';
import Source from '../Source/Source';
import Target from '../Target';
import FormatterStyle from './FormatterStyle';
import getPdfData from '../../api/getPdfData';

const Formatter = ({ pdfProcessingResult }) => {
  const [pdfData, setPdfData] = React.useState([]);
  const [images, setImages] = React.useState([]);
  const [imageBboxes, setImageBboxes] = React.useState([]);

  React.useEffect(() => {
    if (pdfProcessingResult?.length) {
      console.log(pdfProcessingResult);
      getPdfData(pdfProcessingResult[0].pdf_url, setPdfData);
    }
  }, [pdfProcessingResult]);

  React.useEffect(() => {
    const pdfDataArray = Object.values(pdfData);
    if (pdfDataArray?.length) {
      setImages(
        pdfDataArray.map((obj) => ({
          url: obj.image.image_url,
          id: obj.image.id,
        }))
      );
      setImageBboxes(pdfDataArray.map((obj) => obj.bboxes));
    }
  }, [pdfData]);

  return (
    <FormatterStyle>
      <Source images={images} imageBboxes={imageBboxes} />
      <Target images={images} imageBboxes={imageBboxes} />
    </FormatterStyle>
  );
};

export default Formatter;
