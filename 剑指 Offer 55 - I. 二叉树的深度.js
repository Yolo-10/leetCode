/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root == null) return 0;

    let stark = [];
    let deep = 1;

    let dfs = function(root) {
        stark.push(root.val);
        if (root.left == null && root.right == null) deep = Math.max(deep, stark.length);
        if (root.left != null) {
            dfs(root.left);
        }

        if (root.right != null) {
            stark.pop();
            dfs(root.right);
        }
    }
    dfs(root);
    return deep;
};