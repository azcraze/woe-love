const { readAndParseFile, writeToFile } = require("../../filesystem");
const date = require("../index").date;

function writeDateToFile(path, inputDate) {
  let data = readAndParseFile(path);

  console.log(date.new(inputDate));
  data.settings.counters = date.new(inputDate);

  writeToFile(data, path, 3, 2);
  console.log(data);
  return data;
}

module.exports = {
  writeDateToFile,
};
