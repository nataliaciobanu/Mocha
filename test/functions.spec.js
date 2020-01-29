const assert = require('assert')
const {sum, mult} = require('../functions.js');        //import from functions.js

describe('function sum', () => {
    it('should  sum  equals 10', () => {
        assert.equal(sum(2, 4),6);
    })

    it('should  sum not equal 0',  () => {
        assert.notEqual(sum(2, 4),0)
    });
})

describe('function mult', () => {
    it('should  mult a equals 0 ', function () {
        assert.equal(mult(2, 4),8)
    });

    it('should  mult a not equals 8 ', function () {
        assert.equal(mult(2, 4),8)
    });
})


// const assert = require('assert');
// //const {expect} = require ('chai');
//
// const {sum, mult,} = require('../functions.js');
//
// describe('function sum', () => {
//     it("should function sum equals 10", () => {
//         assert.equal(sum(2, 4), 6)
//     });
//
//     it("should function sum not equals 0", () => {
//         assert.notEqual(sum(2, 4), 0);
//     });
//
//     describe('function mult', () => {
//         it('should mult a equals 8', () => {
//             assert.equal(mult(2, 4), 8);
//         });
//
//         it('should mult a not equals 10', () => {
//             assert.notEqual(mult(2, 4), 10);
//         });
//     });
// }



