const func = require('../javascript/validParentheses');

describe("Valid Parentheses", () => {
    const input = "()";
    const output = true;
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toBe(output);
    });
    
    const input2 = "()[]{}";
    const output2 = true;
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toBe(output2);
    });
    
    const input3 = "(]";
    const output3 = false;
    test('Input: ' + input3 + ', Output: ' + output3, () => {
        expect(func(input3)).toBe(output3);
    });
});
