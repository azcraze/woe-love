const path = require("path");
const cwd = require("cwd");

function createFilePath(file) {
  const dirPath = path.join(cwd());

  return path.join(dirPath, fileName);
}
