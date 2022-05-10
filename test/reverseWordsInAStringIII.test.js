const func = require('../javascript/reverseWordsInAStringIII');

describe("Reverse Words In A String III", () => {
    const input = "Let's take LeetCode contest";
    const output = "s'teL ekat edoCteeL tsetnoc";
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toBe(output);
    });
    
    const input2 = "God Ding";
    const output2 = "doG gniD";
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toBe(output2);
    });
});
