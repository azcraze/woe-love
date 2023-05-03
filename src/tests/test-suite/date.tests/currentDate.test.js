// currentDateValues.test.js

const {
  getDateValues,
} = require("../../../../lib/utils/date/currentDateValues");

describe("getDateValues", () => {
  it("should return the correct date values from a valid JSON file", () => {
    const path =
      "/Users/home/code/custom modules/woe-love/src/tests/test-files/skVars.test.json";
    const dateValues = getDateValues(path);

    expect(dateValues).toEqual({
      dayStamp: "05032022",
      doy: "123",
      dom: "05",
      dow: "03",
      week: "18",
      month: "05",
      year: "2022",
      dateString: "May 3",
      date: "123",
    });
  });

  it("should throw an error for an invalid JSON file path", () => {
    const path = "invalid/path/to/file.json";

    expect(() => getDateValues(path)).toThrow();
  });
});
