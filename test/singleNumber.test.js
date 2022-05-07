const func = require('../javascript/singleNumber');

describe("Single Number", () => {
    test('Input nums = [2,2,1] Outputs 1', () => {
        expect(func([2,2,1])).toBe(1);
    });
    
    test('Input nums = [4,1,2,1,2] Outputs 4', () => {
        expect(func([4,1,2,1,2])).toBe(4);
    });
    
    test('Input nums = [1] Outputs 1', () => {
        expect(func([1])).toBe(1);
    });
});
