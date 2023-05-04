const fs = require('fs');
const path = require('path');

/**
 * Generates an index of all modules in a given directory.
 *
 * @param {string} directory - The directory to search for modules.
 * @returns {Object} - An object containing the module names as keys and their exports as values.
 * @throws {TypeError} - If the directory parameter is not a string.
 * @throws {Error} - If the directory does not exist or is not a directory.
 */
function generateModuleIndex(directory) {
  // Check that the directory parameter is a string
  if ('string' !== typeof directory) {
    throw new TypeError('Directory must be a string');
  }

  try {
    // Get the stats for the directory to check if it exists and is a directory
    const stats = fs.statSync(directory);

    if (!stats.isDirectory()) {
      throw new Error(`${directory} is not a directory`);
    }

    // Get all files in the directory
    const files = fs.readdirSync(directory);

    // Generate the module index
    const index = {};

    // Filter for files with a .js extension and require them to get their exports
    files.filter(file => '.js' === path.extname(file))
      .forEach(file => {
        const moduleName = path.parse(file).name;
        const modulePath = path.join(directory, file);
        const module = require(modulePath);

        // Only add modules that export an object to the index
        if ('object' === typeof module) {
          index[moduleName] = module;
        }
      });
    console.log(index)
    // Return the generated module index
    return index;

  } catch (err) {
    console.error(err);
    throw err;
  }
}

// Export the generateModuleIndex function
module.exports = {
  generateModuleIndex
};


let dirPath ='/Users/home/code/custom modules/woe-love/lib/utils'

// Call the function with a directory path to generate the module index
generateModuleIndex(dirPath);
