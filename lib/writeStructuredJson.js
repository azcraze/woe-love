/* ------------------ Imports ----------------- */
const fs = require("fs");
const jsonDepth = require("@davidfig/json-depth"); // Import the `json-depth` library to pretty-print JSON data.

/**
 * Write formatted data to a file.
 * @param {object} dataToWrite - The data to write to the file, as an object.
 * @param {string} filePath - The path to the file to write to.
 * @param {number} [depth=3] - The maximum depth for nested objects/arrays. Defaults to 3.
 * @param {number} [indent=2] - The number of spaces to use for indentation. Defaults to 2.
 * @throws {Error} - If there is an error writing the file, throws with an error message containing the original error.
 */
function writeToFile(dataToWrite, filePath, depth = 3, indent = 2) {
  const formattedJson = jsonDepth(dataToWrite, {
    depth,
    indent,
    spaceInlineArray: true,
    spaceInlineObject: false,
    spaceAfter: 0,
  }); // Use `jsonDepth` to format the JSON data.

  try {
    fs.writeFileSync(filePath, formattedJson, "utf8"); // Attempt to write the formatted data to the file.
  } catch (err) {
    throw new Error(`Error writing file ${filePath}: ${err.message}`); // If there was an error, throw with an error message containing the original error.
  }
}

/* ------------------ Exports ----------------- */

module.exports = {
  writeToFile,
};

// Uncomment the following line for debugging purposes:
/*
module.exports.writeToFile({
  foo: "bar", baz: "qux", listFoo: [ 1, 2, 3 ], objFoo: {
    foo2: "bar2",listFoo: [ 1, 2, 3 ], listBar: [
      'foo',
      'bar',
      'baz',
      'qux',
      'quux',
      'corge',
      'grault',
      'garply' 
    ]
  }
}, './src/tests/test-files/myFile.json', 2, 2);
*/
