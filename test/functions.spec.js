const assert = require('assert');
const {sum, mult, power, isAdult} = require('../functions.js');        //import from functions.js

describe('function sum', () => {
    it('should  sum  equals 10', function ()  {
        assert.equal(sum(2, 4),6);
    });

    it('should  sum not equal 0',  function ()  {
        assert.notEqual(sum(2, 4),0)
    });
});

describe('function mult', () =>  {
    it('should  mult a equals 0 ', function () {
        assert.equal(mult(2, 4),8)
    });

    it('should  mult a not equals 8 ', function () {
        assert.equal(mult(2, 4),8)
    });
});

describe ('function power', () => {
    it('power should return integer in power integer ', function () {
        assert.equal(power(10, 2), 100);
    });

    it('power should return odd integer in power integer', function () {
        assert.equal(power(-8,2),64)
    });

    it('power should return decimal in power decimal', function () {
        assert.equal(power(-2.5, 2),6.25)
    });

    it('power should return 1', function () {
        assert.equal(power(0,0),1)
    });

    it('power should return 0', function () {
        assert.equal(power(0,1000),0)
    });
});

describe('function isAdult', () => {
    it('isAdult should return true if argument equals 21', function ()  {
        assert.equal((isAdult(21)), true)
    });

    it('isAdult should return true if argument is more than 21', function ()  {
        assert.equal((isAdult(40)), true)
    });

    it('isAdult should return false if argument is less than 21, but more than 0', function ()  {
        assert.equal((isAdult(5)), false)
    });

    it('isAdult should return false if argument equals 0', function ()  {
        assert.equal((isAdult(0)), false)
    });

    it('isAdult should return undefined if argument is less than 0', function ()  {
        assert.equal((isAdult(-10)), undefined)
    });
});





