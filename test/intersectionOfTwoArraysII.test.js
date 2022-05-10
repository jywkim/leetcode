const func = require('../javascript/intersectionOfTwoArraysII');

describe("Intersection Of Two Arrays II", () => {
    const inputA = [1,2,2,1];
    const inputB = [2,2];
    const output = [2,2];
    test('Input: ' + inputA + ' | ' + inputB + ', Output: ' + output, () => {
        expect(func(inputA, inputB)).toEqual(output);
    });
    
    const input2A = [4,9,5];
    const input2B = [9,4,9,8,4];
    const output2 = [9,4];
    test('Input: ' + input2A + ' | ' + input2B + ', Output: ' + output2, () => {
        expect(func(input2A, input2B)).toEqual(output2);
    });
});
