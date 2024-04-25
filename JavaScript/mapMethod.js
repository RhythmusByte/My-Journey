const dates = ['28-2004-08', '10-2001-07'];
const formattedDates = dates.map(format);

console.log(formattedDates);

function format(dates) {
  const parts = dates.split('-');
  return `${parts[0]}/${parts[2]}/${parts[1]}`;
}
