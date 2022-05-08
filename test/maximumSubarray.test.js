const func = require('../javascript/maximumSubarray');

describe("Maximum Subarray", () => {
    const input = [-2,1,-3,4,-1,2,1,-5,4];
    const output = 6;
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toBe(output);
    });
    
    const input2 = [1];
    const output2 = 1;
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toBe(output2);
    });
    
    const input3 = [5,4,-1,7,8];
    const output3 = 23;
    test('Input: ' + input3 + ', Output: ' + output3, () => {
        expect(func(input3)).toBe(output3);
    });
});
