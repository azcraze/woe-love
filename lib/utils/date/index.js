/* ------------------ Imports ----------------- */
const dateMath = require("./addDay");

/* ------------------ Exports ----------------- */
module.exports = {
  date: {
    current: require("./currentDateValues").getDateValues,
    new: require("./adjustDate").newDate,
    add: dateMath.addDay,
    subtract: dateMath.subtractDay,
    set: require("./setDate.js").writeDateToFile,
  },
};
