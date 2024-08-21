import { sortByDate } from './sortByDate';

export function sortData(data, filter) {
  let sortedData = [...data];
  console.log(filter);
  switch (filter) {
    case 'ASCENDING':
      sortedData.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'DESCENDING':
      sortedData.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case 'DEADLINE':
      sortedData = sortByDate(data);
      break;
    default:
      sortedData = [...data];
  }

  return sortedData;
}
