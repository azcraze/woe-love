/* ------------------ Imports ----------------- */
const { DateTime } = require("luxon");
// const { getDateValues } = require('./currentDateValues');
const { validateDate, getDateFormat } = require("./validateDate");

/* //////////////////////////////////////////// */
/*                    SCRIPT                    */
/* //////////////////////////////////////////// */
function newDate(dateValue) {
  if (false === validateDate(dateValue)) {
    return false;
  }
  const format = getDateFormat(dateValue);

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
/* ------------------ Exports ----------------- */
module.exports = {
  newDate,
};
/*
let settings = newDate('April 9, 2023')

console.log(settings)

settings = newDate('jun 9, 2023')
console.log(settings)
*/
