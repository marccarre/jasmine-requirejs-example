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

      it('should try to parse string arguments as integers', function() {
        expect(numbers.add(1, '2')).toEqual(3);
      });

      it('should ignore string arguments which are not parseable', function() {
        expect(numbers.add(1, 'oops')).toEqual(1);
      });

      it('should publish an added event showing the operands passed to the method and the result', function() {
        spyOn(events, 'publish');
        numbers.add(1, 2);
        expect(events.publish).toHaveBeenCalled();
        expect(events.publish).toHaveBeenCalledWith('added', {operands: [1, 2], result: 3});
      });

      afterEach(function() {
        // TODO
      });
    });
  });
});
