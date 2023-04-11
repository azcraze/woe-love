const { readAndParseFile, writeToFile } = require('../filesystem');
const date = require('./index').date;

function writeDateToFile(path, inputDate){
  let data = readAndParseFile(path)

  console.log(date.new(inputDate))
  data.settings.counters = date.new(inputDate)

  writeToFile(data, path, 3, 2);
  console.log(data)
  return data;

}

module.exports = {
  writeDateToFile,
}

writeDateToFile('/Users/home/code/custom modules/woe/src/tests/test-files/skVars.json', 'Apr 10, 2023' );