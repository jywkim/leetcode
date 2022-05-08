const func = require('../javascript/containsDuplicate');

describe("Contains Duplicate", () => {
    const input = [1,2,3,1];
    const output = true;
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toBe(output);
    });
    
    const input2 = [1,2,3,4];
    const output2 = false;
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toBe(output2);
    });
    
    const input3 = [1,1,1,3,3,4,3,2,4,2];
    const output3 = true;
    test('Input: ' + input3 + ', Output: ' + output3, () => {
        expect(func(input3)).toBe(output3);
    });
});
