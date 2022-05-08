const func = require('../javascript/moveZeroes');

describe("Move Zeroes", () => {
    const input = [0,1,0,3,12];
    const output = [1,3,12,0,0];
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toEqual(output);
    });

    const input2 = [0];
    const output2 = [0];
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toEqual(output2);
    });
});
