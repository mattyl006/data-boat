import React from 'react';
import Source from '../Source/Source';
import Target from '../Target/Target';
import FormatterStyle from './FormatterStyle';
import getData from '../../api/getData';
import { useDispatch, useSelector } from 'react-redux';
import { tableDataInit } from '../../redux/tableDataSlice';
import getPackage from '../../api/getPackage';
import { packagesInit } from '../../redux/packagesSlice';

const Formatter = ({ pdfProcessingResult }) => {
  const [pdfData, setPdfData] = React.useState([]);
  const [images, setImages] = React.useState([]);
  const [imageBboxes, setImageBboxes] = React.useState([]);
  const [initialTableData, setInitialTableData] = React.useState([]);
  const [pdfPackageResult, setPdfPackageResult] = React.useState(null);
  const page = useSelector((state) => state.packages.page);
  const token = useSelector((state) => state.authorize.token);
  const twoScreens = useSelector((state) => state.synchronize.twoScreens);
  const fileName = useSelector((state) => state.tableData.fileName);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (pdfProcessingResult?.length) {
      if (pdfProcessingResult[0].packages) {
        getPackage(0, setPdfPackageResult);
        dispatch(packagesInit(pdfProcessingResult[0].packages));
      } else {
        getData(pdfProcessingResult[0].pdf_url, setPdfData, token);
        getData(pdfProcessingResult[0].table_url, setInitialTableData, token);
      }
    }
  }, [dispatch, pdfProcessingResult, token]);

  React.useEffect(() => {
    if (page) {
      setPdfPackageResult(null);
      getPackage(page - 1, setPdfPackageResult);
    }
  }, [page]);

  React.useEffect(() => {
    if (pdfPackageResult?.length) {
      getData(pdfPackageResult[0].pdf_url, setPdfData, token);
      getData(pdfPackageResult[0].table_url, setInitialTableData, token);
    }
  }, [pdfPackageResult, token]);

  React.useEffect(() => {
    dispatch(tableDataInit(Object.values(initialTableData)));
  }, [dispatch, initialTableData]);

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
      {!twoScreens && <Target fileName={fileName} pdfProcessingResult={pdfProcessingResult} />}
    </FormatterStyle>
  );
};

export default Formatter;
