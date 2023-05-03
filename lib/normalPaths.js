
// => 'undefined'
const cwd = require('cwd');
const path = require('path');
const { env } = require('process');

function normalizePath(relativePath = "") {
  const rootPath = path.resolve(__dirname, './');

  return path.resolve(rootPath, relativePath);
}

module.exports = {
  normalizePath
}

console.log(normalizePath());
