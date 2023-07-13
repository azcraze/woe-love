require("rootpath")();
const { date, PATHS } = require("./index");

/**
 * @typedef {Object} EndOfPeriodArr
 * @property {string} dayStamp - The day stamp.
 * @property {number} dayOfTheMonth - The day of the month.
 * @property {number} weekOfTheYear - The week of the year.
 * @property {number} monthOfTheYear - The month of the year.
 * @property {number} year - The year.
 */

/**
 * Retrieves an array containing the end of the period information.
 *
 * @returns {EndOfPeriodArr} - An object containing the end of the period information.
 */
function getEndOfPeriodArr() {
  const skVarsPath = PATHS.SK_VARS;

  // const skVars = readAndParseFile(skVarsPath);
  let dateObj = date.current(skVarsPath);

  dateObj = {
    dayStamp: dateObj.dayStamp,
    dayOfTheMonth: dateObj.dom,
    weekOfTheYear: dateObj.week,
    monthOfTheYear: dateObj.month,
    year: dateObj.year,
  };

  dateObj = date.checkPeriod(dateObj);
  return dateObj;
}

// Example usage:
const endOfPeriodArr = getEndOfPeriodArr();

console.log(endOfPeriodArr);

module.exports = {
  getEndOfPeriodArr,
};
