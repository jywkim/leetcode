const func = require('../javascript/containsDuplicate');

describe("Contains Duplicate", () => {
    test('Input nums = [1,2,3,1] Outputs true', () => {
        expect(func([1,2,3,1])).toBe(true);
    });
    
    test('Input nums = [1,2,3,4] Outputs false', () => {
        expect(func([1,2,3,4])).toBe(false);
    });
    
    test('Input nums = [1,1,1,3,3,4,3,2,4,2] Outputs true', () => {
        expect(func([1,1,1,3,3,4,3,2,4,2])).toBe(true);
    });
});
