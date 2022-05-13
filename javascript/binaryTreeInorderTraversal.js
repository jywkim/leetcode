var inorderTraversal = function(root) {
    let stack = [];
    let res = [];
    
    while (root !== null || stack.length !== 0) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
};

var TreeNode = function(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
};

module.exports = {inorderTraversal, TreeNode};
