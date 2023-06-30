"use strict";

/* ------------------ Imports ----------------- */
const { DateTime } = require("luxon");
const { detectDateFormat, validateDate } = require("./validateDate");

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

  const format = detectDateFormat(dateValue);

  /**
   * @brief Takes a date and formats it according to the format set in the config. This is used to create date objects that are passed to the calendar.
   * @param dateInput The date to be formatted. It should be in the format defined in the config.
   * @param detectedFormat The date format detected from the dateInput.
   * @return { Object } The formatted date object that is passed to the calendar and can be used to create dates
   */
  function dateFormatting(dateInput, detectedFormat) {
    // Create a new DateTime object from the input date string using the detected format.
    const dt = DateTime.fromFormat(dateInput, detectedFormat);

    // Format the DateTime object into useful values.
    const dateString = dt.toFormat("MMM d");
    const dayOfYear = dt.toFormat("ooo");
    const dayOfMonth = dt.toFormat("dd");
    const month = dt.toFormat("MM");
    const week = dt.toFormat("W");
    const year = dt.toFormat("yyyy");
    const date = dt.toFormat("DDD");
    const stamp = dt.toFormat(`${month}${dayOfMonth}${year}`);

    // Convert the day of the week to a padded two-digit string.
    let dayOfWeek = dt.toFormat("E");

    dayOfWeek = (parseInt(dayOfWeek) + 1).toString().padStart(2, "0");

    // Return the formatted date object.
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

  // Call the dateFormatting function with the input date string and detected format, and return its result.
  return dateFormatting(dateValue, format);
}

// Log an example usage of the newDate function.

// console.log(newDate("june 12, 2022"));

/* ------------------ Exports ----------------- */
module.exports = {
  newDate,
};
