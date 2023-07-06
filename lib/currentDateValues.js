// lib/utils/date/currentDateValues.js
require("rootpath")();
const { readAndParseFile } = require("./readAndParseJson");
const { log } = require("woelogs");
const { PATHS } = require("./defaultPaths");
const DEFAULT_SK_VARS_PATH = PATHS.SK_VARS;

console.log(DEFAULT_SK_VARS_PATH);

/**
 * @brief Reads and parses the counters file at the given path and returns an object with dayStamp doy dow week month year dateString and date.
 * @param path The path to the file to read. Must be a valid date.
 * @return { Object } The date object that was read and parsed from the file at the given path. The keys of the object are the same as the keys of the counters file
 */
function getDateValues(path = DEFAULT_SK_VARS_PATH) {
  let data = readAndParseFile(path);

  log(typeof data);
  log(data);
  let values = data.settings.counters;

  console.log(values);

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
// log(getDateValues('/Users/home/code/custom modules/woe-love/src/tests/test-files/skVars.json'))
