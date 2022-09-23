/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root == null) return true;

    let deep = 0,
        tmp = 0;
    let Depth = function(root) {
        let depthLeft = Depth(root.left);
        let depthRight = Depth(root.right);

        return (depthLeft > depthRight ? depthLeft : depthRight) + 1;
    }
};