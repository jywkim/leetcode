const func = require('../javascript/searchInsertPosition');

describe("Search Insert Position", () => {
    const inputA = [1,3,5,6];
    const inputB = 5;
    const output = 2;
    test('Input: ' + inputA + ' | ' + inputB + ', Output: ' + output, () => {
        expect(func(inputA, inputB)).toBe(output);
    });

    const input2A = [1,3,5,6];
    const input2B = 2;
    const output2 = 1;
    test('Input: ' + input2A + ' | ' + input2B + ', Output: ' + output2, () => {
        expect(func(input2A, input2B)).toBe(output2);
    });

    const input3A = [1,3,5,6];
    const input3B = 7;
    const output3 = 4;
    test('Input: ' + input3A + ' | ' + input3B + ', Output: ' + output, () => {
        expect(func(input3A, input3B)).toBe(output3);
    });
});
