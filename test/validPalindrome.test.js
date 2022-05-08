const func = require('../javascript/validPalindrome');

describe("Valid Palindrome", () => {
    const input = "A man, a plan, a canal: Panama";
    const output = true;
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toBe(output);
    });
    
    const input2 = "race a car";
    const output2 = false;
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toBe(output2);
    });
    
    const input3 = " ";
    const output3 = true;
    test('Input: ' + input3 + ', Output: ' + output3, () => {
        expect(func(input3)).toBe(output3);
    });
});
