const {inorderTraversal, TreeNode} = require('../javascript/binaryTreeInorderTraversal');

describe("Binary Tree Inorder Traversal", () => {
    const input = [1,null,2,3];
    const output = [1,3,2];
    test('Input: ' + input + ', Output: ' + output, () => {
        const root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.left = new TreeNode(3);
        expect(inorderTraversal(root)).toEqual(output);
    });

    const input2 = [1,2,5,6,null,8,11];
    const output2 = [6,2,1,8,5,11];
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        const root2 = new TreeNode(1);
        root2.right = new TreeNode(5);
        root2.right.left = new TreeNode(8);
        root2.right.right = new TreeNode(11);
        root2.left = new TreeNode(2);
        root2.left.left = new TreeNode(6);
        expect(inorderTraversal(root2)).toEqual(output2);
    });

    const input3 = [1];
    const output3 = [1];
    test('Input: ' + input3 + ', Output: ' + output3, () => {
        const root3 = new TreeNode(1);
        expect(inorderTraversal(root3)).toEqual(output3);
    });
});
