const func = require('../javascript/romanToInteger');

describe("Roman to Integer", () => {
    const input = "III";
    const output = 3;
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toBe(output);
    });
    
    const input2 = "LVIII";
    const output2 = 58;
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toBe(output2);
    });

    const input3 = "MCMXCIV";
    const output3 = 1994;
    test('Input: ' + input3 + ', Output: ' + output3, () => {
        expect(func(input3)).toBe(output3);
    });
});
