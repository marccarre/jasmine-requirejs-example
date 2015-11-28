/* globals define, describe */
define(['numbers', 'events'], function(numbers, events) {
  'use strict';

  describe('The numbers module', function() {
    describe('The add method', function() {
      beforeEach(function() {
        // TODO
      });

      it('should accept one or more numerical arguments and return their sum', function() {
        expect(numbers.add(1)).toEqual(1);
        expect(numbers.add(1, 2)).toEqual(3);
        expect(numbers.add(1, 2, 3)).toEqual(6);
      });

      afterEach(function() {
        // TODO
      });
    });
  });
});
