const fs = require("fs");
const { writeToFile } = require("../../../lib/filesystem/writeStructuredJson");

describe("writeToFile", () => {
  const testFilePath =
    "/Users/home/code/custom modules/woe-love/src/tests/test-files/testWrite.json";
  const testData = {
    name: "pooks",
    words: [ "lol", "dummy", "blame fierce" ],
    details: {
      ign: "pookie woe",
      id: "6776996",
      level: 5250,
    },
  };

  afterEach(() => {
    // Clean up test output file after each test, but only if it exists
    if (fs.existsSync(testFilePath)) {
      fs.unlinkSync(testFilePath);
    }
  });

  it("writes formatted JSON data to a file", () => {
    writeToFile(testData, testFilePath);
    const fileContents = fs.readFileSync(testFilePath, "utf8");
    const parsedData = JSON.parse(fileContents);

    expect(parsedData).toEqual(testData);
  });

  it("handles errors when writing to a file", () => {
    const mockFs = jest.spyOn(fs, "writeFileSync");

    // Mock fs.writeFileSync to throw an error
    mockFs.mockImplementationOnce(() => {
      throw new Error("Test error");
    });

    // Call writeToFile with invalid path
    expect(() =>
      writeToFile(testData, "./non-existent-folder/test-output.json")
    ).toThrow();

    // Restore the original implementation of fs.writeFileSync
    mockFs.mockRestore();
  });
});
