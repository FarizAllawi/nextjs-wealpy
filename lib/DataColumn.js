export default function DataColumn(data, column) {
  const rowData = Math.ceil(data?.length / column);
  let col1 = [],
    col2 = [],
    col3 = [],
    col4 = [];

  let dataColumn = 0;
  data?.map(item => {
    if (dataColumn === column) {
      dataColumn = 0;
    }
    dataColumn += 1;
    switch (dataColumn) {
      case 1: {
        col1.push(item);
        break;
      }
      case 2: {
        col2.push(item);
        break;
      }
      case 3: {
        col3.push(item);
        break;
      }
      case 4: {
        col4.push(item);
        break;
      }
    }
  });

  return {
    dataCol1: col1,
    dataCol2: col2,
    dataCol3: col3,
    dataCol4: col4,
  };
}
