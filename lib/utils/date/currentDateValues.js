// lib/utils/date/currentDateValues.js

const { readAndParseFile } = require("../../filesystem");

/**
* @brief Reads and parses the counters file at the given path and returns an object with dayStamp doy dow week month year dateString and date.
* @param path The path to the file to read. Must be a valid date.
* @return { Object } The date object that was read and parsed from the file at the given path. The keys of the object are the same as the keys of the counters file
*/
function getDateValues(path) {
  let data = readAndParseFile(path);

  let values = data.settings.counters;

  let dateObj = {
    dayStamp: values.dayStamp,
    doy: values.dayOf.year,
    dom: values.dayOf.month,
    dow: values.dayOf.week,
    week: values.week,
    month: values.month,
    year: values.year,
    dateString: values.dateString,
    date: values.date,
  };

  return dateObj;
}

module.exports = {
  getDateValues,
};
