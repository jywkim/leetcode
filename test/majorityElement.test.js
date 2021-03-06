const func = require('../javascript/majorityElement');

describe("Majority Element", () => {
    const input = [3,2,3];
    const output = 3;
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toBe(output);
    });
    
    const input2 = [2,2,1,1,1,2,2];
    const output2 = 2;
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toBe(output2);
    });
});
