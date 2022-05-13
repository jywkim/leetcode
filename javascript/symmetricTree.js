var isSymmetric = function(root) {
    return symmetric(root, root)
};

function symmetric(l, r) {
    if (l === null && r === null) return true;
    if (l === null || r === null) return false;
    return (l.val === r.val) && symmetric(l.left, r.right) && symmetric(l.right, r.left);
}

var TreeNode = function(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
};

var createTree = function(data) {
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

module.exports = {isSymmetric, createTree};
