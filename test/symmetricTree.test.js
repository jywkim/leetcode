const func = require('../javascript/symmetricTree');

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
 
describe("Symmetric Tree", () => {
    const input = [1,2,2,3,4,4,3];
    const output = true;
    test('Input: ' + input + ', Output: ' + output, () => {
        let head = createTree(input)
        expect(func(head)).toEqual(output);
    });

    const input2 = [1,2,2,null,3,null,3];
    const output2 = false;
    test('Input: ' + input2 + ', Output: ' + output2, () => {
        let head = createTree(input2)
        expect(func(head)).toEqual(output2);
    });
});
