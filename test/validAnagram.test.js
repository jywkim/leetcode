const func = require('../javascript/validAnagram');

describe("Valid Anagram", () => {
    const inputA = "anagram";
    const inputB = "nagaram";
    const output = true;
    test('Input: ' + inputA + ' ' + inputB + ', Output: ' + output, () => {
        expect(func(inputA, inputB)).toBe(output);
    });

    const input2A = "rat";
    const input2B = "car";
    const output2 = false;
    test('Input: ' + input2A + ' ' + input2B + ', Output: ' + output2, () => {
        expect(func(input2A, input2B)).toBe(output2);
    });
});
