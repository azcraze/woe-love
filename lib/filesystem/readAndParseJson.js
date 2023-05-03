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
  const data = fs.readFileSync(filePath);

  return JSON.parse(data);
}

/* ------------------ Exports ----------------- */
module.exports = { readAndParseFile };
