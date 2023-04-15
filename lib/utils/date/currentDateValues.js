const { readAndParseFile } = require("../../filesystem");

function getDateValues(path) {
  let data = readAndParseFile(path);

  console.log(`PATH:${path}`);
  console.log(`DATA:${data}`);
  let values = data.settings.counters;

  let dateObj = {
    dayStamp: values.dayStamp,
    doy: values.day.year,
    dom: values.day.month,
    dow: values.day.week,
    week: values.week,
    month: values.month,
    year: values.year,
    dateString: values.dateString,
    date: values.date,
  };

  return dateObj;
}

/*
let counters = getDateValues('./path/to/skVars/here.json)

const {
  dom, week, year, month, dayStamp 
} = { ...counters } 
*/
module.exports = {
  getDateValues,
};
