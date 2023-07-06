// libTesting/utils/date/newPeriodCheck.js

const { DateTime } = require("luxon");
const { log } = require("woelogs");

// log('now running: ' + 'libTesting/utils/date/newPeriodCheck.js');

/**
 * Helper function to parse date string into a Luxon DateTime object.
 * @param {string} dateStamp - The date string in the format 'MMddyyyy'.
 * @returns {DateTime} - A Luxon DateTime object representing the parsed date.
 */
function parseDate(dateStamp) {
  return DateTime.fromFormat(dateStamp, "MMddyyyy");
}

/**
 * Helper function to calculate tomorrow's date given a DateTime object representing a date.
 * @param {DateTime} date - A Luxon DateTime object representing the current date.
 * @returns {DateTime} - A Luxon DateTime object representing tomorrow's date.
 */
function calculateTomorrow(date) {
  return date.plus({ days: 1 });
}

/**
 * Helper function to calculate the first day of a month given a year and month number.
 * @param {number} year - The year for which the first day of the month should be calculated.
 * @param {number} month - The month for which the first day of the month should be calculated (1-12).
 * @returns {DateTime} - A Luxon DateTime object representing the first day of the specified month and year.
 */
function calculateFirstOfMonth(year, month) {
  return DateTime.local(year, month, 1);
}

/**
 * Helper function to calculate the first day of a year given a year number.
 * @param {number} year - The year for which the first day of the year should be calculated.
 * @returns {DateTime} - A Luxon DateTime object representing the first day of the specified year.
 */
function calculateFirstOfYear(year) {
  return DateTime.local(year, 1, 1).plus({ years: 1 });
}

/**
 * Main function to check date information and determine options.
 * @param {object} dateInfo - An object containing the date information to be checked.
 * @param {string} dateInfo.dayStamp - The date string in the format 'MMddyyyy'.
 * @param {string} dateInfo.monthOfTheYear - The month number as a string ('1'-'12').
 * @param {string} dateInfo.year - The year number as a string.
 * @returns {Array<boolean>} - An array of boolean values representing the options for the given date:
 *  - isTomorrowMonday: whether tomorrow is a Monday.
 *  - isTomorrowFirstOfMonth: whether tomorrow is the first day of the current month.
 *  - isTomorrowFirstOfYear: whether tomorrow is the first day of the current year.
 */
function checkDateInfo(dateInfo) {
  log(
    `check date info :${dateInfo.dayStamp}, ${dateInfo.monthOfTheYear}, ${dateInfo.year}}`
  );
  const {
    dayStamp, monthOfTheYear, year 
  } = dateInfo;

  const date = parseDate(dayStamp);
  const month = parseInt(monthOfTheYear, 10);
  const yearNum = parseInt(year, 10);

  const tomorrow = calculateTomorrow(date);
  const firstOfMonth = calculateFirstOfMonth(yearNum, month);
  const firstOfYear = calculateFirstOfYear(yearNum);

  const isTomorrowMonday = 1 === tomorrow.weekday;
  const isTomorrowFirstOfMonth = tomorrow.hasSame(firstOfMonth, "day");
  const isTomorrowFirstOfYear = tomorrow.hasSame(firstOfYear, "day");

  // Return the options as an array
  return [ isTomorrowMonday, isTomorrowFirstOfMonth, isTomorrowFirstOfYear ];
}

module.exports = { checkDateInfo };

// EXAMPLE - checkDateInfo
// Uncomment the following line for debugging purposes:

/*
log(
  checkDateInfo({
    dayStamp: "06072023",
    monthOfTheYear: "6",
    year: "2023",
  })
);
*/
