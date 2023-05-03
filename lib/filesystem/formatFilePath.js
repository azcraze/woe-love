const pathResolver = require('path-resolver');

function createFilePath(file) {
  console.log(pathResolver.sync())
  const resolvedPath = pathResolver.guess(file);

  console.log(resolvedPath);
  return resolvedPath;

}

createFilePath('../utils')