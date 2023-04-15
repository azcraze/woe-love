/* ------------------ Imports ----------------- */
const PrettyError = require("pretty-error");
// eslint-disable-next-line no-unused-vars
const pe = new PrettyError();

const fs = require("fs");

const { isValidJson } = require("./validateJson");
/* ----------------- Variables ---------------- */

/* //////////////////////////////////////////// */
/*                    SCRIPT                    */
/* //////////////////////////////////////////// */
function readAndParseFile(filePath) {
  if (true !== isValidJson(filePath)) {
    return false;
  }

  return JSON.parse(fs.readFileSync(filePath));
}

/* ------------------ Exports ----------------- */
module.exports = { readAndParseFile };
