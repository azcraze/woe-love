// lib/utils/date/adjustDate.js

/* ------------------ Imports ----------------- */
const { DateTime } = require("luxon");
// const { getDateValues } = require('./currentDateValues');
const { validateDate, getDateFormat } = require("./validateDate");

/**
* @brief Creates a new date object based on the date input. It returns false if the input is invalid or not able to be converted to a date
* @param dateValue The date to be converted
* @return { Object } The date object or false if invalid or not able to be converted to a date ( in the case of invalid input
*/
function newDate(dateValue) {
  // Validate the date value.
  if (false === validateDate(dateValue)) {
    return false;
  }
  const format = getDateFormat(dateValue);

  /**
  * @brief Takes a date and formats it according to the format set in the config. This is used to create date objects that are passed to the calendar.
  * @param dateInput The date to be formatted. It should be in the format defined in the config.
  * @return { Object } The formatted date object that is passed to the calendar and can be used to create dates
  */
  function dateFormatting(dateInput) {
    const dt = DateTime.fromFormat(dateInput, format);
    const dateString = dt.toFormat("MMM d");
    const dayOfYear = dt.toFormat("ooo");
    const dayOfMonth = dt.toFormat("dd");
    const month = dt.toFormat("MM");
    const week = dt.toFormat("W");
    const year = dt.toFormat("yyyy");
    const date = dt.toFormat("DDD");
    const stamp = dt.toFormat(`${month}${dayOfMonth}${year}`);

    var dayOfWeek = dt.toFormat("E");

    console.log(dayOfWeek);
    dayOfWeek = (parseInt(dayOfWeek) + 1).toString().padStart(2, "0");

    return {
      dateString: dateString,
      dayOf: {
        year: dayOfYear,
        month: dayOfMonth,
        week: dayOfWeek,
      },
      dayStamp: stamp,
      month: month,
      week: week,
      year: year,
      date: date,
    };
  }
  return dateFormatting(dateValue);
}


console.log(newDate("june 12, 2022"))
/* ------------------ Exports ----------------- */
module.exports = {
  newDate,
};
