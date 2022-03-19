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
    let tmp = [];
    let path = [];
    let res = 0;

    let dfs = function(root) {
        tmp.push(root.val);
        console.log(root.val)
        res += root.val;
        if (res == target && !root.left && !root.right) {
            path.push(tmp);
        }
        if (root.left != null) {
            dfs(root.left);
            let last = tmp.pop();
            console.log(last);
            res -= last;
        }
        if (root.right != null) {
            dfs(root.right);
            let last = tmp.pop();
            res -= last;
        }
    }

    dfs(root);
    return path;
};


root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], targetSum = 22;
console.log(pathSum(root, targetSum));