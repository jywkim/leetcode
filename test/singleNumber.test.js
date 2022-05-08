const func = require('../javascript/singleNumber');

describe("Single Number", () => {
    const input = [2,2,1];
    const output = 1;
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toBe(output);
    });

    const input2 = [4,1,2,1,2];
    const output2 = 4;
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toBe(output2);
    });

    const input3 = [1];
    const output3 = 1;
    test('Input: ' + input3 + ', Output: ' + output3, () => {
        expect(func(input3)).toBe(output3);
    });
});
