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
        var x, length, calls;

        spyOn(events, 'publish');
        //spyOn(events, 'publish').and.callThrough();
        //spyOn(events, 'publish').and.returnValue(false);
        //spyOn(events, 'publish').and.callFake(function(name, args) {
        //  window.alert(name);
        //});
        //spyOn(events, 'publish').and.throwError('oops');
        //expect(function() {
        //  numbers.add(1, 2);  
        //}).toThrowError('oops');
        //events.publish.and.stub();
        expect(events.publish.calls.any()).toBe(false);
        expect(events.publish.calls.count()).toEqual(0);
        
        numbers.add(1, 2);
        expect(events.publish).toHaveBeenCalled();
        expect(events.publish).toHaveBeenCalledWith('added', {operands: [1, 2], result: 3});
        expect(events.publish.calls.any()).toBe(true);
        expect(events.publish.calls.count()).toEqual(1);

        numbers.add(2, 3);
        //events.publish.calls.reset();
        expect(events.publish.calls.count()).toEqual(2);
        expect(events.publish.calls.argsFor(1)).toEqual(['added', {operands: [2, 3], result: 5}]);
        expect(events.publish.calls.argsFor(1)).toEqual([jasmine.any(String), {operands: [2, 3], result: 5}]);
        expect(events.publish.calls.mostRecent().args).toEqual(['added', {operands: [2, 3], result: 5}]);
        expect(events.publish.calls.allArgs()).toEqual([
          ['added', {operands: [1, 2], result: 3}], 
          ['added', {operands: [2, 3], result: 5}]
        ]);
        
        calls = events.publish.calls.all();
        for (x = 0, length = calls.length; x < length; x += 1) {
          expect(calls[x].object.id).toEqual('events');
        }
      });

      afterEach(function() {
        // TODO
      });
    });
  });
});
