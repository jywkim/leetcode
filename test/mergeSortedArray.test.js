const func = require('../javascript/mergeSortedArray');

describe("Merge Sorted Array", () => {
    const inputA = [1,2,3,0,0,0];
    const inputB = 3;
    const inputC = [2,5,6];
    const inputD = 3;
    const output = [1,2,2,3,5,6];
    test('Input: ' + inputA + ' | ' + inputB + ' | ' + inputC + ' | ' + inputD + ', Output: ' + output, () => {
        expect(func(inputA, inputB, inputC, inputD)).toEqual(output);
    });
    
    const input2A = [1];
    const input2B = 1;
    const input2C = [];
    const input2D = 0;
    const output2 = [1];
    test('Input: ' + input2A + ' | ' + input2B + ' | ' + input2C + ' | ' + input2D + ', Output: ' + output2, () => {
        expect(func(input2A, input2B, input2C, input2D)).toEqual(output2);
    });

    const input3A = [0];
    const input3B = 0;
    const input3C = [1];
    const input3D = 1;
    const output3 = [1];
    test('Input: ' + input3A + ' | ' + input3B + ' | ' + input3C + ' | ' + input3D + ', Output: ' + output3, () => {
        expect(func(input3A, input3B, input3C, input3D)).toEqual(output3);
    });
});
