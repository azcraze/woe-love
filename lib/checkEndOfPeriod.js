const { date, PATHS } = require("./index");


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


module.exports = {
  getEndOfPeriodArr,
}
