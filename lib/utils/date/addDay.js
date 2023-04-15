/* ------------------ Imports ----------------- */
const luxon = require("luxon");
/* ----------------- Variables ---------------- */

/* //////////////////////////////////////////// */
/*                    SCRIPT                    */
/* //////////////////////////////////////////// */

function addDay(dateString) {
  const dt = luxon.DateTime.fromFormat(dateString, "LLL d, yyyy");
  const newDt = dt.plus({ days: 1 });
  const newDateString = newDt.toFormat("LLL d, yyyy");

  console.log(newDateString);

  return newDateString;
}

function subtractDay(dateString) {
  const dt = luxon.DateTime.fromFormat(dateString, "LLL d, yyyy");
  const newDt = dt.minus({ days: 1 });
  const newDateString = newDt.toFormat("LLL d, yyyy");

  console.log(newDateString);

  return newDateString;
}

/* ------------------ Exports ----------------- */
module.exports = {
  addDay,
  subtractDay,
};

const input = "apr 6, 2023";

addDay(input);
subtractDay(input);
