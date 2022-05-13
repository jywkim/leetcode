const func = require('../javascript/groupAnagrams');

describe("Group Anagrams", () => {
    const input = ["eat","tea","tan","ate","nat","bat"];
    const output = [["bat"],["nat","tan"],["ate","eat","tea"]];
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toEqual(output);
    });

    const input2 = [""];
    const output2 = [[""]];
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toEqual(output2);
    });

    const input3 = ["a"]
    const output3 = [["a"]]
    test('Input: ' + input3 + ', Output: ' + output3, () => {
        expect(func(input3)).toEqual(output3);
    });
});