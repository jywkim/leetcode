const func = require('../javascript/implementStrStr()');

describe("Implement strStr()", () => {
    const inputA = "hello";
    const inputB = "ll";
    const output = 2;
    test('Input: ' + inputA + ' | ' + inputB + ', Output: ' + output, () => {
        expect(func(inputA, inputB)).toBe(output);
    });
    
    const input2A = "aaaaa";
    const input2B = "bba";
    const output2 = -1;
    test('Input: ' + input2A + ' | ' + input2B + ', Output: ' + output2, () => {
        expect(func(input2A, input2B)).toBe(output2);
    });
});
