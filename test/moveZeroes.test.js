const func = require('../javascript/moveZeroes');

describe("Move Zeroes", () => {
    test('Input nums = [0,1,0,3,12] Outputs [1,3,12,0,0]', () => {
        expect(func([0,1,0,3,12])).toEqual([1,3,12,0,0]);
    });

    test('Input nums = [0] Outputs [0]', () => {
        expect(func([0])).toEqual([0]);
    });
});
