const assert = require('assert');
const {expect} = require ('chai');

const {sum, mult} = require('../index.js');

describe('function sum', () => {
    it("should function sum equals 10",() => {
        assert.equal(sum(2, 4),6 )
    });

    it("should function sum not equals 0",() => {
        assert.notEqual(sum(2, 4),0);
    });

    it('should mult a equals 8', () => {
        assert.equal(mult(2,4),8);
    });

    it('should mult a not equals 10', () => {
        assert.notEqual(mult(2,4),10);
    });
});

