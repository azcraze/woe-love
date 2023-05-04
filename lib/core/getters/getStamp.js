// const { date } = require("../../../utils/date");
const { getDateValues } = require("../../utils/date");
const _ = require('lodash')

function getStamp(path, inputPeriod = "all") {
  let dateObj = getDateValues(path);
  let years = [ "2021", "2022" ]
  let olderRecords = _.includes(years, dateObj.year)

  let input = inputPeriod;
  let stamp;

  switch (input) {
    case "day":
      stamp = dateObj.dayStamp;
      break;
    case "week":
      if (true === olderRecords){
        stamp = `${dateObj.week}-${dateObj.year}`
      } else {
        stamp = dateObj.week;
      }
      break;
    case "month":
      if (true === olderRecords){
        stamp = `${dateObj.month}-${dateObj.year}`
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

  return stamp;
}


module.exports = {
  getStamp,
};
