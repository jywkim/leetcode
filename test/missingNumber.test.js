const func = require('../javascript/missingNumber');

describe("Missing Number", () => {
    test('Input nums = [3,0,1] Outputs 2', () => {
        expect(func([3,0,1])).toBe(2);
    });
    
    test('Input nums = [0,1] Outputs 2', () => {
        expect(func([0,1])).toBe(2);
    });
    
    test('Input nums = [9,6,4,2,3,5,7,0,1] Outputs 8', () => {
        expect(func([9,6,4,2,3,5,7,0,1])).toBe(8);
    });
});
