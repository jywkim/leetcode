const func = require('../javascript/validAnagram');

describe("Valid Anagram", () => {
    test('Input s = "anagram", t = "nagaram" Outputs true', () => {
        expect(func("anagram", "nagaram")).toBe(true);
    });

    test('Input s = "rat", t = "car" Outputs false', () => {
        expect(func("rat", "car")).toBe(false);
    });
});
