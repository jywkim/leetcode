const func = require('../javascript/climbingStairs');

describe("Climbing Stairs", () => {
    const input = 2;
    const output = 2;
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toBe(output);
    });
    
    const input2 = 3;
    const output2 = 3;
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toBe(output2);
    });
});
