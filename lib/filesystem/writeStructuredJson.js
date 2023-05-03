/* ------------------ Imports ----------------- */
const fs = require("fs");
const jsonDepth = require("@davidfig/json-depth");

/* ----------------- Variables ---------------- */

/* //////////////////////////////////////////// */
/*                    SCRIPT                    */
/* //////////////////////////////////////////// */
function writeToFile(dataToWrite, filePath, depth = 3, indent = 2) {
  const formattedJson = jsonDepth(dataToWrite, {
    depth,
    indent,
    spaceInlineArray: true,
    spaceInlineObject: false,
    spaceAfter: 0,
  });

  try {
    fs.writeFileSync(filePath, formattedJson, "utf8");
  } catch (err) {
    throw new Error(`Error writing file ${filePath}: ${err.message}`);
  }
}

/* ------------------ Exports ----------------- */

module.exports = {
  writeToFile,
};
