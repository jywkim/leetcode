const func = require('../javascript/firstUniqueCharacterInAString');

describe("First Unique Character In A String", () => {
    test('Input s = "leetcode" Outputs 0', () => {
        expect(func("leetcode")).toBe(0);
    });
    
    test('Input s = "loveleetcode" Outputs 2', () => {
        expect(func("loveleetcode")).toBe(2);
    });
    
    test('Input s = "aabb" Outputs -1', () => {
        expect(func("aabb")).toBe(-1);
    });
});
