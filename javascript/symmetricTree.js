var isSymmetric = function(root) {
    return symmetric(root, root)
};

function symmetric(l, r) {
    if (l === null && r === null) return true;
    if (l === null || r === null) return false;
    return (l.val === r.val) && symmetric(l.left, r.right) && symmetric(l.right, r.left);
}

module.exports = isSymmetric;
