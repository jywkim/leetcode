const func = require('../javascript/checkIfTwoStringArraysAreEquivalent');

describe("Check If Two String Arrays Are Equivalent", () => {
    const inputA = ["ab", "c"];
    const inputB = ["a", "bc"];
    const output = true;
    test('Input: ' + inputA + ' | ' + inputB + ', Output: ' + output, () => {
        expect(func(inputA, inputB)).toBe(output);
    });

    const input2A = ["a", "cb"];
    const input2B = ["ab", "c"];
    const output2 = false;
    test('Input: ' + input2A + ' | ' + input2B + ', Output: ' + output2, () => {
        expect(func(input2A, input2B)).toBe(output2);
    });

    const input3A = ["abc", "d", "defg"];
    const input3B = ["abcddefg"];
    const output3 = true;
    test('Input: ' + input3A + ' | ' + input3B + ', Output: ' + output, () => {
        expect(func(input3A, input3B)).toBe(output3);
    });
});
