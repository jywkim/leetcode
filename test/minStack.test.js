const MinStack = require('../javascript/minStack');

function executeStack(minStack, method, param, output, i) {
    switch(method) {
        case "MinStack":
            expect(i).toBe(0);
            break;
        case "push":
            minStack.push(param);
            break;
        case "pop":
            minStack.pop();
            break;
        case "top":
            expect(minStack.top()).toBe(output);
            break;
        case "getMin":
            expect(minStack.getMin()).toBe(output);
            break;
        default:

        }
 }

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
