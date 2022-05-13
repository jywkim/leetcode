const {MinStack, executeStack} = require('../javascript/minStack');

describe("Min Stack", () => {
    const input = ["MinStack","push","push","push","getMin","pop","top","getMin"]
    const params = [[],[-2],[0],[-3],[],[],[],[]];
    const output = [null,null,null,null,-3,null,0,-2];
    test('Input: ' + input + ', Output: ' + output, () => {
        const minStack = new MinStack();
        for (var i = 0; i < input.length; i++) {
            executeStack(minStack, input[i], params[i][0], output[i], i);
        }
    });
});
