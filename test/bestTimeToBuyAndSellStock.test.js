const func = require('../javascript/bestTimeToBuyAndSellStock');

describe("Best Time to Buy and Sell Stock", () => {
    const input = [7,1,5,3,6,4];
    const output = 5;
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toBe(output);
    });
    
    const input2 = [7,6,4,3,1];
    const output2 = 0;
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toBe(output2);
    });
});
