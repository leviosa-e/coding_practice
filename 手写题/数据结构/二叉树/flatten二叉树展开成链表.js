function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var flatten = function (root) {
  if (!root || (!root.left && !root.right)) return root;
  let leftLeaf = flatten(root.left);
  let rightLeaf = flatten(root.right);
  console.log(root.val, leftLeaf, rightLeaf);
  leftLeaf.right = root.right;
  root.right = root.left;
  root.left = null;
  return rightLeaf;
};

let root = new TreeNode(1);
root.left = new TreeNode(2, new TreeNode(3), new TreeNode(4));
root.right = new TreeNode(5, null, new TreeNode(6));

flatten(root);
