const func = require('../javascript/reverseString');

describe("Reverse String", () => {
    const input = ["h","e","l","l","o"];
    const output = ["o","l","l","e","h"];
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toEqual(output);
    });

    const input2 = ["H","a","n","n","a","h"];
    const output2 = ["h","a","n","n","a","H"];
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toEqual(output2);
    });
});