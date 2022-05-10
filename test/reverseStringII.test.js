const func = require('../javascript/reverseStringII');

describe("Reverse String II", () => {
    const inputA = "abcdefg";
    const inputB = 2;
    const output = "bacdfeg";
    test('Input: ' + inputA + ' | ' + inputB + ', Output: ' + output, () => {
        expect(func(inputA, inputB)).toEqual(output);
    });

    const input2A = "abcd";
    const input2B = 2;
    const output2 = "bacd";
    test('Input: ' + input2A + ' | ' + input2B + ', Output: ' + output2, () => {
        expect(func(input2A, input2B)).toEqual(output2);
    });
});