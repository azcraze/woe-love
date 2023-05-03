/* ------------------ Imports ----------------- */
const dateMath = require("./date/addDay");
const sani = require('./sanitizeInput')

/* ------------------ Exports ----------------- */
module.exports = {
  date: {
    current: require("./date/currentDateValues").getDateValues,
    new: require("./date/adjustDate").newDate,
    add: dateMath.addDay,
    subtract: dateMath.subtractDay,
  },
  log: require("./console/log").log,
  split: {
    space: sani.splitBySpaces,
    dash: sani.splitByDashes,
    comma: sani.splitByCommas     
  }
};
