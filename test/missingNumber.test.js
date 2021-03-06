const func = require('../javascript/missingNumber');

describe("Missing Number", () => {
    const input = [3,0,1];
    const output = 2;
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toBe(output);
    });
    
    const input2 = [0,1];
    const output2 = 2;
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toBe(output2);
    });

    const input3 = [9,6,4,2,3,5,7,0,1];
    const output3 = 8;
    test('Input: ' + input3 + ', Output: ' + output3, () => {
        expect(func(input3)).toBe(output3);
    });
});
