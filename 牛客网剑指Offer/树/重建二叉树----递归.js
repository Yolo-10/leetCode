function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function reConstructBinaryTree(pre, vin) {
  // write code here
  let len = pre.length;
  if (!len) return null;
  let rootIndex = vin.indexOf(pre[0]);
  let res = new TreeNode(pre[0]);
  res.left = reConstructBinaryTree(
    pre.slice(1, rootIndex + 1),
    vin.slice(0, rootIndex)
  );
  res.right = reConstructBinaryTree(
    pre.slice(rootIndex + 1, len),
    vin.slice(rootIndex + 1, len)
  );
  return res;
}
module.exports = {
  reConstructBinaryTree: reConstructBinaryTree,
};
