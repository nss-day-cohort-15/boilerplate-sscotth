/* globals Example */

'use strict';

describe('Example', function () {

  describe('abc', function () {
    it ('should have an abc function', function () {
      expect(Example.abc).toBeDefined();
    });

    it ('should return 123', function () {
      expect(Example.abc()).toBe(123);
    });
  });
});
