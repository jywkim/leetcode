const func = require('../javascript/maximumDepthOfBinaryTree');

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

function createTree(data) {
  const targets = [[]];
  let head;
      
  data.forEach((value, i) => {
      const
          node = new TreeNode(value),
          [target, side] = targets[i];

      targets.push([node, 'left'], [node, 'right']);

      if (!target) head = node;
      else if (value !== null) target[side] = node;        
  });

  return head;
}
 
describe("Maximum Depth of Binary Tree", () => {
    const input = [3,9,20,null,null,15,7];
    const output = 3;
    test('Input: ' + input + ', Output: ' + output, () => {
        let head = createTree(input)
        expect(func(head)).toEqual(output);
    });

    const input2 = [1,null,2];
    const output2 = 2;
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        let head = createTree(input2)
        expect(func(head)).toEqual(output2);
    });
});
