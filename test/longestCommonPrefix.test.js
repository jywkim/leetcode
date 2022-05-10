const func = require('../javascript/longestCommonPrefix');

describe("Longest Common Prefix", () => {
    const input = ["flower","flow","flight"];
    const output = "fl";
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toBe(output);
    });
    
    const input2 = ["dog","racecar","car"];
    const output2 = "";
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toBe(output2);
    });
});
