const func = require('../javascript/pascalsTriangle');

describe("Pascal's Triangle", () => {
    test('Input numRows = 5 Outputs [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]', () => {
        expect(func(5)).toEqual([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]);
    });
    
    test('Input numRows = 1 Outputs [[1]]', () => {
        expect(func(1)).toEqual([[1]]);
    });
});
