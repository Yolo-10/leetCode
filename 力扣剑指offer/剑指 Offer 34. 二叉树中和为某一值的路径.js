/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
    if (root == null) return [];

    let path = [];
    var res = [];
    let summy = 0;

    let dfs = function(root) {
        path.push(root.val);
        summy += root.val;

        if (summy === target && root.left === null && root.right === null) {
            res.push([...path]);
        }

        if (root.left != null) {
            dfs(root.left);
            summy -= path.pop();
        }
        if (root.right != null) {
            dfs(root.right);
            summy -= path.pop();
        }
    }

    dfs(root);
    return res;
};