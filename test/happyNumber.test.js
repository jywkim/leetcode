const func = require('../javascript/happyNumber');

describe("Happy Number", () => {
    const input = 19;
    const output = true;
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toBe(output);
    });
    
    const input2 = 2;
    const output2 = false;
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toBe(output2);
    });
});
