const {maxDepth, createTree} = require('../javascript/maximumDepthOfBinaryTree');
 
describe("Maximum Depth of Binary Tree", () => {
    const input = [3,9,20,null,null,15,7];
    const output = 3;
    test('Input: ' + input + ', Output: ' + output, () => {
        let head = createTree(input)
        expect(maxDepth(head)).toEqual(output);
    });

    const input2 = [1,null,2];
    const output2 = 2;
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        let head = createTree(input2)
        expect(maxDepth(head)).toEqual(output2);
    });
});
