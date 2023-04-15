/* eslint-disable no-unused-vars */
/* ------------------ Imports ----------------- */
var PrettyError = require("pretty-error");
var pe = new PrettyError();

const fs = require("fs");

/* ----------------- Variables ---------------- */

/* //////////////////////////////////////////// */
/*                    SCRIPT                    */
/* //////////////////////////////////////////// */

function isValidJson(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");

    JSON.parse(data);
    return true;
  } catch (err) {
    console.error(`Invalid JSON in file ${filePath}: ${err.message}`);
    return false;
  }
}

/* ------------------ Exports ----------------- */
module.exports = {
  isValidJson,
};
