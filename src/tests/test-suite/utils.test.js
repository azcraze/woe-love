// ../../../lib/utils/validateDate.test.js

const { log } = require("../../../lib/utils/console");

test("log function prints single line gradient message", () => {
  const consoleSpy = jest.spyOn(console, "log");
  const message = "Hello, world!";

  log(message);
  expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(message));
});

test("log function prints multiline gradient message", () => {
  const consoleSpy = jest.spyOn(console, "log");
  const message = "Hello,\nworld!";

  log(message);
  expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(message));
});

test("log function prints jsome output for objects", () => {
  const consoleSpy = jest.spyOn(console, "log");
  const obj = { foo: "bar", baz: 123 };

  log(obj);
  expect(consoleSpy).toHaveBeenCalledWith(
    expect.stringContaining('"foo": "bar"')
  );
  expect(consoleSpy).toHaveBeenCalledWith(
    expect.stringContaining('"baz": 123')
  );
});

test("log function does not print undefined values", () => {
  const consoleSpy = jest.spyOn(console, "log");
  const message = undefined;

  log(message);
  expect(consoleSpy).not.toHaveBeenCalled();
});
const {
  singleLine,
  multiLine,
  log: _log,
} = require("../../../lib/utils/console/log");
const { teen, mind } = require("gradient-string");

describe("consoleLog", () => {
  describe("singleLine", () => {
    it("should call console.log with gradient.teen", () => {
      const input = "Hello, world!";
      const spy = jest.spyOn(console, "log");

      singleLine(input);
      expect(spy).toHaveBeenCalledWith(teen(input));
    });

    it("should call console.log with gradient.mind", () => {
      const input = "Hello, world!";
      const spy = jest.spyOn(console, "log");

      jest.spyOn(Math, "floor").mockReturnValue(1);
      singleLine(input);
      expect(spy).toHaveBeenCalledWith(mind(input));
    });

    // test other gradient functions
  });

  describe("multiLine", () => {
    it("should call console.log with gradient.teen.multiline", () => {
      const input = "Hello\nworld!";
      const spy = jest.spyOn(console, "log");

      multiLine(input);
      expect(spy).toHaveBeenCalledWith(teen.multiline(input));
    });

    it("should call console.log with gradient.mind.multiline", () => {
      const input = "Hello\nworld!";
      const spy = jest.spyOn(console, "log");

      jest.spyOn(Math, "floor").mockReturnValue(1);
      multiLine(input);
      expect(spy).toHaveBeenCalledWith(mind.multiline(input));
    });

    // test other gradient functions
  });

  describe("log", () => {
    it("should call jsome for object input", () => {
      const input = { foo: "bar" };
      const spy = jest.spyOn(console, "log");

      jest.spyOn(console, "log").mockImplementation(() => {});
      _log(input);
      expect(spy).not.toHaveBeenCalled();
      expect(jsome.getColoredString(input)).toBeDefined();
    });

    it("should call singleLine for single line input", () => {
      const input = "Hello, world!";
      const spy = jest.spyOn(console, "log");

      _log(input);
      expect(spy).toHaveBeenCalled();
    });

    it("should call multiLine for multiline input", () => {
      const input = "Hello\nworld!";
      const spy = jest.spyOn(console, "log");

      _log(input);
      expect(spy).toHaveBeenCalled();
    });
  });
});
