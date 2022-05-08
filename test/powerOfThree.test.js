const func = require('../javascript/powerOfThree');

describe("Power of Three", () => {
    const input = 27;
    const output = true;
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toBe(output);
    });
    
    const input2 = 0;
    const output2 = false;
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toBe(output2);
    });
    
    const input3 = 9;
    const output3 = true;
    test('Input: ' + input3 + ', Output: ' + output3, () => {
        expect(func(input3)).toBe(output3);
    });
});
