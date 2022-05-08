const func = require('../javascript/pascalsTriangle');

describe("Pascal's Triangle", () => {
    const input = 5;
    const output = [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]];
    test('Input: ' + input + ', Output: ' + output, () => {
        expect(func(input)).toEqual(output);
    });

    const input2 = 1;
    const output2 = [[1]];
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        expect(func(input2)).toEqual(output2);
    });
});
