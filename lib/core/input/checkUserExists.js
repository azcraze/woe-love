const { readAndParseFile } = require("../../filesystem/readAndParseJson");
const _ = require("lodash");

function ListNames(path) {
  const data = readAndParseFile(path);

  return data.settings.playersArray;
}

function NameExists(path, name) {
  const names = ListNames(path);

  if (true !== _.includes(names, name)) {
    return false;
  }
}
module.exports = {
  NameExists,
};
