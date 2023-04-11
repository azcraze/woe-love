// ../../../lib/utils/validateDate.test.js

const { validateDate, getDateFormat } = require('../../../lib/utils/validateDate.js');

describe('validateDate', () => {
  test('should return true for a valid date', () => {
    const date = 'Apr 3, 2023';

    expect(validateDate(date)).toBe(true);
  });

  test('should return false for an invalid date', () => {
    const date = 'not a date';

    expect(validateDate(date)).toBe(false);
  });
});

describe('getDateFormat', () => {
  test('should return the correct format for a valid date', () => {
    const date = 'Apr 3, 2023';

    expect(getDateFormat(date)).toBe('MMM d, yyyy');
  });

  test('should return null for an invalid date', () => {
    const date = 'not a date';

    expect(getDateFormat(date)).toBe(null);
  });
});


/* 
const { log } = require('../../../lib/utils/consoleLog');

test('log function prints single line gradient message', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  const message = 'Hello, world!';

  log(message);
  expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(message));
});

test('log function prints multiline gradient message', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  const message = 'Hello,\nworld!';

  log(message);
  expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining(message));
});

test('log function prints jsome output for objects', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  const obj = { foo: 'bar', baz: 123 };

  log(obj);
  expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('"foo": "bar"'));
  expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('"baz": 123'));
});

test('log function does not print undefined values', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  const message = undefined;

  log(message);
  expect(consoleSpy).not.toHaveBeenCalled();
});
const consoleLog = require('../../../lib/utils/consoleLog');
const gradient = require("gradient-string");

describe('consoleLog', () => {
  describe('singleLine', () => {
    it('should call console.log with gradient.teen', () => {
      const input = 'Hello, world!';
      const spy = jest.spyOn(console, 'log');

      consoleLog.singleLine(input);
      expect(spy).toHaveBeenCalledWith(gradient.teen(input));
    });

    it('should call console.log with gradient.mind', () => {
      const input = 'Hello, world!';
      const spy = jest.spyOn(console, 'log');

      jest.spyOn(Math, 'floor').mockReturnValue(1);
      consoleLog.singleLine(input);
      expect(spy).toHaveBeenCalledWith(gradient.mind(input));
    });

    // test other gradient functions
  });

  describe('multiLine', () => {
    it('should call console.log with gradient.teen.multiline', () => {
      const input = 'Hello\nworld!';
      const spy = jest.spyOn(console, 'log');

      consoleLog.multiLine(input);
      expect(spy).toHaveBeenCalledWith(gradient.teen.multiline(input));
    });

    it('should call console.log with gradient.mind.multiline', () => {
      const input = 'Hello\nworld!';
      const spy = jest.spyOn(console, 'log');

      jest.spyOn(Math, 'floor').mockReturnValue(1);
      consoleLog.multiLine(input);
      expect(spy).toHaveBeenCalledWith(gradient.mind.multiline(input));
    });

    // test other gradient functions
  });

  describe('log', () => {
    it('should call jsome for object input', () => {
      const input = { foo: 'bar' };
      const spy = jest.spyOn(console, 'log');

      jest.spyOn(console, 'log').mockImplementation(() => {});
      consoleLog.log(input);
      expect(spy).not.toHaveBeenCalled();
      expect(jsome.getColoredString(input)).toBeDefined();
    });

    it('should call singleLine for single line input', () => {
      const input = 'Hello, world!';
      const spy = jest.spyOn(console, 'log');

      consoleLog.log(input);
      expect(spy).toHaveBeenCalled();
    });

    it('should call multiLine for multiline input', () => {
      const input = 'Hello\nworld!';
      const spy = jest.spyOn(console, 'log');

      consoleLog.log(input);
      expect(spy).toHaveBeenCalled();
    });
  });
});
*/