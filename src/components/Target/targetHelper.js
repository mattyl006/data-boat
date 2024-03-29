import { write, read } from 'xlsx';

const format = (text) => {
  return '"' + text.replaceAll('\t', '    ') + '"';
};

const compareByOrder = (a, b) => {
  return Number(a.attributes.order.value) - Number(b.attributes.order.value);
};

const downloadTable = (setObjUrl) => {
  const nodes = Object.values(document.getElementById('Table').childNodes).sort(
    compareByOrder
  );
  const tableData = nodes.map((node) => node.childNodes);
  let tsvContent = `Number\tTitle\tSubnumber\tDescription\tFK Code\n`;
  tableData.forEach((row) => {
    const rowA = format(row[0].value);
    const rowB = format(row[1].value);
    const rowC = format(row[2].value);
    let rowD = format(row[3].value);
    if (rowD.length > 32000) {
      alert(
        'Przekroczony limit znaków w jednym wierszu. Proszę skrócić tekst w komórce, w przeciwnym razie Excel będzie ucinać tekst.'
      );
      rowD = rowD.slice(0, 32000);
    }
    const rowE = format(row[4].value);
    tsvContent += `${rowA}\t${rowB}\t${rowC}\t${rowD}\t${rowE}\n`;
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
