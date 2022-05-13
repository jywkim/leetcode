const func = require('../javascript/bestTimeToBuyAndSellStockII');

describe("Best Time To Buy And Sell Stock II", () => {
    const input = [7,1,5,3,6,4];
    const output = 7;
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toEqual(output);
    });

    const input2 = [1,2,3,4,5];
    const output2 = 4;
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toEqual(output2);
    });

    const input3 = [7,6,4,3,1];
    const output3 = 0;
    test('Input: ' + input3 + ', Output: ' + output3, () => {
        expect(func(input3)).toEqual(output3);
    });
});