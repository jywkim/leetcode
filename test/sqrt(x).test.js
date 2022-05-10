const func = require('../javascript/sqrt(x)');

describe("Sqrt(x)", () => {
    const input = 4;
    const output = 2;
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toBe(output);
    });
    
    const input2 = 8;
    const output2 = 2;
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toBe(output2);
    });
});
