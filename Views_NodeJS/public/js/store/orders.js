convertArrayOfObjectsToCSV = args => {  
  const data = args.data;
  if (!data || !data.length) return;

  const columnDelimiter = args.columnDelimiter || ',';
  const lineDelimiter = args.lineDelimiter || '\n';

  const keys = Object.keys(data[0]);

  let result = '';
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  data.forEach(item => {
    ctr = 0;
    keys.forEach(key => {
      if (ctr > 0) result += columnDelimiter;
      result += item[key];
      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}

downloadCSV = async args => {
  const Data = await $.get( `${window.origin}/store/order-list`) || [];
  let csv = convertArrayOfObjectsToCSV({
    data: Data
  });
  if (!csv) return;
  const filename = args.filename || 'export.csv';

  if (!csv.match(/^data:text\/csv/i)) {
    csv = 'data:text/csv;charset=utf-8,' + csv;
  }
  const data = encodeURI(csv);

  const link = document.createElement('a');
  link.setAttribute('href', data);
  link.setAttribute('download', filename);
  link.click();
}

async function Printer() {

  downloadCSV({filename: 'Danh sách đơn hàng'}); 
}

$(document).ready(function(){
  $('#export').click(function(){
    Printer();
  })
})