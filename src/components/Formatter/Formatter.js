import React from 'react';
import Source from '../Source/Source';
import Target from '../Target';
import FormatterStyle from './FormatterStyle';
import getData from '../../api/getData';

const Formatter = ({ pdfProcessingResult }) => {
  const [pdfData, setPdfData] = React.useState([]);
  const [images, setImages] = React.useState([]);
  const [imageBboxes, setImageBboxes] = React.useState([]);
  const [tableData, setTableData] = React.useState([]);

  React.useEffect(() => {
    if (pdfProcessingResult?.length) {
      getData(pdfProcessingResult[0].pdf_url, setPdfData);
      getData(pdfProcessingResult[0].table_url, setTableData);
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
      <Target tableData={Object.values(tableData)} />
    </FormatterStyle>
  );
};

export default Formatter;
