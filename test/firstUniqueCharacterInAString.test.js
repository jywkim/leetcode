const func = require('../javascript/firstUniqueCharacterInAString');

describe("First Unique Character In A String", () => {
    const input = "leetcode";
    const output = 0;
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toBe(output);
    });
    
    const input2 = "loveleetcode";
    const output2 = 2;
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toBe(output2);
    });
    
    const input3 = "aabb";
    const output3 = -1;
    test('Input: ' + input3 + ', Output: ' + output3, () => {
        expect(func(input3)).toBe(output3);
    });
});
