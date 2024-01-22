import { write, read } from 'xlsx';

const format = (text) => {
  return text.replaceAll('\n', '').replaceAll('\t', '');
};

const compareByOrder = (a, b) => {
  return Number(a.attributes.order.value) - Number(b.attributes.order.value);
};

const downloadTable = (setObjUrl) => {
  const nodes = Object.values(document.getElementById('Table').childNodes).sort(
    compareByOrder
  );
  const tableData = nodes.map((node) => node.childNodes);
  let tsvContent = `a\tb\tc\td\n`;
  tableData.forEach((row) => {
    const rowA = format(row[0].value);
    const rowB = format(row[1].value);
    const rowC = format(row[2].value);
    let rowD = format(row[3].value);
    if (rowD.length > 32000) {
      rowD = rowD.slice(0, 32000);
    }
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
