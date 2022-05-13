const func = require('../javascript/reverseWordsInAString');

describe("Reverse Words In A String", () => {
    const input = "the sky is blue";
    const output = "blue is sky the";
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toBe(output);
    });

    const input2 = "  hello world  ";
    const output2 = "world hello";
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toBe(output2);
    });

    const input3 = "a good   example"
    const output3 = "example good a"
    test('Input: ' + input3 + ', Output: ' + output3, () => {
        expect(func(input3)).toBe(output3);
    });
});