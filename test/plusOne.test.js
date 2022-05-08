const func = require('../javascript/plusOne');

describe("Plus One", () => {
    const input = [1,2,3];
    const output = [1,2,4];
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toEqual(output);
    });
    
    const input2 = [4,3,2,1];
    const output2 = [4,3,2,2];
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toEqual(output2);
    });
    
    const input3 = [9];
    const output3 = [1,0];
    test('Input: ' + input3 + ', Output: ' + output3, () => {
        expect(func(input3)).toEqual(output3);
    });
});
