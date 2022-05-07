const func = require('../javascript/majorityElement');

describe("Majority Element", () => {
    test('Input nums = [3,2,3] Outputs ["o","l","l","e","h"]', () => {
        expect(func([3,2,3])).toBe(3);
    });
    
    test('Input nums = [2,2,1,1,1,2,2] Outputs ["h","a","n","n","a","H"]', () => {
        expect(func([2,2,1,1,1,2,2])).toBe(2);
    });
});
