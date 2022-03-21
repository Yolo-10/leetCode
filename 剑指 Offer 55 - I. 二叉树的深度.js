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
//法1：深搜+回溯  可以看出每条路径，但时间空间占用大，差的算法
var maxDepth = function(root) {
    if (root == null) return 0;
    let stark = [];
    let deep = 1;
    let dfs = function(root) {
        stark.push(root.val);
        if (root.left == null && root.right == null) {
            deep = Math.max(deep, stark.length);
        }
        if (root.left != null) {
            dfs(root.left);
            stark.pop();
        }
        if (root.right != null) {
            dfs(root.right);
            stark.pop();
        }
    }
    dfs(root);
    return deep;
};

// 法2：深搜 + 分治，优秀
var maxDepth = function(root) {
    if (root === null) return 0;

    let depthLeft = maxDepth(root.left);
    let depthRight = maxDepth(root.right);

    return (depthLeft > depthRight ? depthLeft : depthRight) + 1;
};

// 法3：先序深度搜索 + 回溯， 优秀
var maxDepth = function(root) {
    if (root == null) return 0;

    let deep = 0,
        res = 0;
    let dfs = function(root) {
        deep++;
        res = deep > res ? deep : res;
        if (root.left != null) dfs(root.left);
        if (root.right != null) dfs(root.right);
        deep--;
    }

    dfs(root);
    return res;
};