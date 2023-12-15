import { write, read } from 'xlsx';

const format = (text) => {
  return text.replaceAll('\n', '').replaceAll('\t', '');
};

const getRow = (row, col) => {
  const textValue = row[col][0]?.textValue;
  if (textValue) {
    return format(textValue);
  }
  return Object.values(row[col])
    .map((bbox) => format(bbox.text))
    .join(' ');
};

const downloadTable = (tableData, setObjUrl) => {
  let tsvContent = `a\tb\tc\td\n`;
  tableData.forEach((row) => {
    const rowA = getRow(row, '1st');
    const rowB = getRow(row, '2nd');
    const rowC = getRow(row, '3rd');
    const rowD = getRow(row, '4th');
    tsvContent += `${rowA}\t${rowB}\t${rowC}\t${rowD}\n`;
  });
  const wb = read(tsvContent.split(',').join('","'), {
    type: 'string',
    raw: true,
  });
  const data = write(wb, { type: 'buffer', bookType: 'xlsx' });
  const blob = new Blob([data], { type: 'text/tsv;charset=utf-8,' });
  setObjUrl(URL.createObjectURL(blob));
};

export { downloadTable };
