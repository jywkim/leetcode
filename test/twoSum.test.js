const func = require('../javascript/TwoSum');

describe("Two Sum", () => {
    const inputA = [2,7,11,15];
    const inputB = 9;
    const output = [0,1];
    test('Input: ' + inputA + ' | ' + inputB + ', Output: ' + output, () => {
        expect(func(inputA, inputB)).toEqual(output);
    });
    
    const input2A = [3,2,4];
    const input2B = 6;
    const output2 = [1,2];
    test('Input: ' + input2A + ' | ' + input2B + ', Output: ' + output2, () => {
        expect(func(input2A, input2B)).toEqual(output2);
    });
    
    const input3A = [3,3];
    const input3B = 6;
    const output3 = [0,1];
    test('Input: ' + input3A + ' | ' + input3B + ', Output: ' + output3, () => {
        expect(func(input3A, input3B)).toEqual(output3);
    });
});
