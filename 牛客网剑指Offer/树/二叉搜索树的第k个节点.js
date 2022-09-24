/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param proot TreeNode类
 * @param k int整型
 * @return int整型
 */
function KthNode(proot, k) {
  // write code here
  if (!proot || k <= 0) return -1;
  let resArr = [];
  middleOrder(proot, resArr);
  return resArr[k - 1] || -1;
}

//递归中序遍历，arr顺序存储树上的值
function middleOrder(proot, arr) {
  if (!proot) return;
  middleOrder(proot.left, arr);
  arr.push(proot.val);
  middleOrder(proot.right, arr);
}
module.exports = {
  KthNode: KthNode,
};