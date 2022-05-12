const func = require('../javascript/excelSheetColumnNumber');

describe("Excel Sheet Column Number", () => {
    const input = "A";
    const output = 1;
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toBe(output);
    });

    const input2 = "AB";
    const output2 = 28;
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toBe(output2);
    });

    const input3 = "ZY";
    const output3 = 701;
    test('Input: ' + input3 + ', Output: ' + output3, () => {
        expect(func(input3)).toBe(output3);
    });
});
