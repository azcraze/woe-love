const fs = require("fs");
const { writeToFile, readAndParseFile } = require("../../../lib/filesystem");
const { isValidJson } = require("../../../lib/filesystem/validateJson");


// Tests that the function returns parsed JSON data when a valid JSON file path is provided.  
it("test_valid_file_path",() => {
  const filePath = "../test-files/skVars.test.json";
  const expectedData = {
    "name": "John", "age": 30, "city": "New York" 
  };
  const readFileSyncMock = jest.spyOn(fs, 'readFileSync').mockReturnValue(JSON.stringify(expectedData));
  const isValidJsonMock = jest.spyOn(isValidJson, 'isValidJson').mockReturnValue(true);

  const result = readAndParseFile(filePath);

  expect(result).toEqual(expectedData);
  expect(readFileSyncMock).toHaveBeenCalledWith(filePath);
  expect(isValidJsonMock).toHaveBeenCalledWith(filePath);

  readFileSyncMock.mockRestore();
  isValidJsonMock.mockRestore();
});