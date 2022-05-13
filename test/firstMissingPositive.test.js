const func = require('../javascript/firstMissingPositive');

describe("First Missing Positive", () => {
    const input = [1,2,0];
    const output = 3;
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toBe(output);
    });

    const input2 = [3,4,-1,1];
    const output2 = 2;
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toBe(output2);
    });

    const input3 = [7,8,9,11,12];
    const output3 = 1;
    test('Input: ' + input3 + ', Output: ' + output3, () => {
        expect(func(input3)).toBe(output3);
    });
});