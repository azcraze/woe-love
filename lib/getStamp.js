"use strict";
//  ./lib/getters/helpers/getStamp.js
require("rootpath")();
const { getDateValues } = require("./currentDateValues");
const _ = require("lodash");
const { log } = require("woelogs");

/**
 * Returns a stamp based on the given path and input period.
 * @param {string} path - The path to get date values from.
 * @param {string} inputPeriod - The period to get the stamp for. Default is "all".
 * @returns {string} - The stamp for the given input period.
 */
function getStamp(inputPeriod = "all") {
  // Get date values from the path
  let dateObj = getDateValues();

  log(dateObj);

  // Check if the year is in the years array
  let years = [ "2021", "2022" ];
  let olderRecords = _.includes(years, dateObj.year);

  // Set the stamp based on the input period
  let stamp;

  switch (inputPeriod) {
    case "day":
      stamp = dateObj.dayStamp;
      break;
    case "week":
      if (olderRecords) {
        stamp = `${dateObj.week}-${dateObj.year}`;
      } else {
        stamp = dateObj.week;
      }
      break;
    case "month":
      if (olderRecords) {
        stamp = `${dateObj.month}-${dateObj.year}`;
      } else {
        stamp = dateObj.month;
      }
      break;
    case "year":
      stamp = dateObj.year;
      break;
    case "all":
    case "total":
      stamp = "all";
      break;
    default:
      stamp = "all";
  }

  // Log that function has ended
  log(`${stamp}\n\n`);
  log("getStamp function ended");
  return stamp;
}

module.exports = {
  getStamp,
};
