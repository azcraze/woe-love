// adjustDate.test.js

const { newDate } = require("../../../../lib/utils/date/adjustDate");

describe("newDate", () => {
  it("should return the correct date values for a valid date string", () => {
    const dateValues = newDate("May 3, 2023");

    expect(dateValues).toEqual({
      dateString: "May 3",
      dayOf: {
        year: "123",
        month: "03",
        week: "03",
      },
      dayStamp: "05032023",
      month: "05",
      week: "18",
      year: "2023",
      date: "123",
    });
  });

  it("should return false for an invalid date string", () => {
    const dateValues = newDate("foo bar");

    expect(dateValues).toBe(false);
  });
});
