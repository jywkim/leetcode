const func = require('../javascript/removeDuplicatesFromSortedArray');

describe("Remove Duplicates From Sorted Array", () => {
    const input = [1,1,2];
    const output = 2;
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toBe(output);
    });
    
    const input2 = [0,0,1,1,1,2,2,3,3,4];
    const output2 = 5;
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toBe(output2);
    });
});
